
// src/services/resources.ts
import { databases, storage } from '../appwrite/appwrite';
import { conf } from '../config/conf';
import { ID } from 'appwrite';
import { Resource, UserRole } from '../types';

// Create Resource
export async function createResource(resource: Omit<Resource, 'id' | 'downloads' | 'createdAt' | 'updatedAt'>, file: File, userRole:UserRole) {
    try {

        if (userRole !== UserRole.ADMIN && userRole !== UserRole.CR) {
            throw new Error('You do not have permission to upload resources');
          }
        // 1. Upload file
        const fileUpload = await storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        );

        // 2. Create resource document
        return await databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            ID.unique(),
            {
                ...resource,
                fileID: fileUpload.$id,
                downloads: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        );
    } catch (error) {
        console.error('Error creating resource:', error);
        throw error;
    }
}

// Get Resources with Filters
export async function getResources(filters?: {
    course?: string;
    subject?: string;
    semester?: number;
    type?: Resource['type'];
}) {
    try {
        const queries = [];
        if (filters?.course) queries.push(`course=${filters.course}`);
        if (filters?.subject) queries.push(`subject=${filters.subject}`);
        if (filters?.semester) queries.push(`semester=${filters.semester}`);
        if (filters?.type) queries.push(`type=${filters.type}`);

        return await databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            queries
        );
    } catch (error) {
        console.error('Error fetching resources:', error);
        throw error;
    }
}

// Get Single Resource
export async function getResource(resourceId: string) {
    try {
        return await databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            resourceId
        );
    } catch (error) {
        console.error('Error fetching resource:', error);
        throw error;
    }
}

// Update Resource
export async function updateResource(
    resourceId: string, 
    updates: Partial<Omit<Resource, 'id' | 'fileID' | 'downloads' | 'createdAt' | 'updatedAt'>>
) {
    try {
        return await databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            resourceId,
            {
                ...updates,
                updatedAt: new Date().toISOString()
            }
        );
    } catch (error) {
        console.error('Error updating resource:', error);
        throw error;
    }
}

// Delete Resource
export async function deleteResource(resourceId: string, fileId: string,userRole:UserRole) {
    try {
        if (userRole !== UserRole.ADMIN) {
            throw new Error('You do not have permission to delete resources');
          }
        // Delete file first
        await storage.deleteFile(conf.appwriteBucketId, fileId);
        
        // Then delete resource document
        await databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            resourceId
        );
        
        return true;
    } catch (error) {
        console.error('Error deleting resource:', error);
        throw error;
    }
}

// Download Resource
export async function downloadResource(resourceId: string, fileId: string) {
    try {
        // Get file download URL
        const fileUrl = storage.getFileDownload(conf.appwriteBucketId, fileId);
        
        // Increment download count
        await databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            resourceId,
            {
                downloads: (await databases.getDocument(conf.appwriteDatabaseId, conf.appwriteResourceCollectionId, resourceId)).downloads + 1
            }
        );

        return fileUrl;
    } catch (error) {
        console.error('Error downloading resource:', error);
        throw error;
    }
}

// Get User's Resources
export async function getUserResources(userId: string) {
    try {
        return await databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            [`uploadedBy=${userId}`]
        );
    } catch (error) {
        console.error('Error fetching user resources:', error);
        throw error;
    }
}

// Search Resources
export async function searchResources(query: string) {
    try {
        return await databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteResourceCollectionId,
            [
                `title.contains=${query}`,
                `description.contains=${query}`,
                `subject.contains=${query}`
            ]
        );
    } catch (error) {
        console.error('Error searching resources:', error);
        throw error;
    }
}