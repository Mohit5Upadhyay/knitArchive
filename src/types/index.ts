export enum UserRole {
    ADMIN = 'ADMIN',
    CR = 'CR',
    STUDENT = 'STUDENT'
  }

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    course: string;
    semester: number;
    session:string;
    branch:string
}

export interface Resource {
    id: string;
    title: string;
    description: string;
    type: "NOTES" | "PYQ" | "PRACTICAL";
    subject: string;
    course: string;
    semester: number;
    academicYear: string;
    fileID: string;
    uploadedBy: string;
    uploadedByName: string;  
    downloads: number;   
    createdAt: string;
    updatedAt: string;
}


// src/types/index.ts
export interface ResourceRequest {
    id?: string;
    course: string;
    branch: string;
    semester: number;
    subject: string;
    academicYear: string;
    description: string;
    requestType: "NOTES" | "PYQ" | "PRACTICAL";
    status: "PENDING" | "FULFILLED" | "REJECTED";
    userId: string;
    createdAt: string;
}