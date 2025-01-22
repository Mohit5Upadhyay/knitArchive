import { Client , Databases , Account , Storage } from "appwrite";
import { conf } from "../config/conf";

export const client = new Client();
client
.setEndpoint(conf.appwriteEndpoint) 
.setProject(conf.appwriteProjectId) 

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);
