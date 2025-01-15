import { Client , Databases , Account , Storage } from "appwrite";

export const client = new Client();
client
.setEndpoint("appwriteEndpoint") 
.setProject("appwriteProjectId") 

export const database = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
