// const conf = {
//     appwriteEndpoint:String(import.meta.env.VITE_APPWRITE_ENDPOINT),
//     appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteResourceCollectionId:String(import.meta.env.VITE_APPWRITE_RESOURCE_COLLECTION_ID),
//     appwriteUserCollectionId:String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),

// }

// export { conf };

const conf = {
    appwriteEndpoint:String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteResourceCollectionId:String(import.meta.env.VITE_APPWRITE_RESOURCE_COLLECTION_ID),
    appwriteUserCollectionId:String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

}

export { conf };