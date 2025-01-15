export type UserRole = "STUDENT" | "CR"

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    course: string;
    semester: number;
}

export interface Resource {
    id: string;
    title: string;
    description: string;
    type: "NOTES" | "PYQ" | "PRACTICAL";
    subject: string;
    course: string;
    semester: number;
    fileID: string;
    uploadedBy: string;
    createdAt: string;
}