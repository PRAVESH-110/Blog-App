import conf from '../conf/conf.js';
import { Client, ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        console.log("Appwrite Endpoint:", conf.appwriteUrl);
        console.log("Appwrite Project ID:", conf.appwriteProjectId);

        this.databases = new Databases (this.client);
        this.bucket = new Storage (this.client);

    }

//post services starts here

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            if (!title || !slug || !content || !featuredImage || !status || !userId) {
                throw new Error("All fields are required");
            }

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, //we use slug as the document id (let)
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        }
        catch(error){
            console.error("Appwrite service :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(slug,{title, content, featuredImage, status, }){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try{
             await databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
           return false; 
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error", error);
                return false;
            
        }
    }

    //for getting all the posts, we will use the listDocuments method of the Appwrite service
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }



    async uploadFile(file){
        try{
            if (!file) {
                throw new Error("No file provided");
            }

            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.error("Appwrite service :: uploadFile :: error", error);
            throw error;
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        }
        catch(error){
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        try {
            if (!fileId) {
                console.error("No fileId provided for preview");
                return null;
            }
            // Use getFileView for direct file access (no transformations)
            return this.bucket.getFileView(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error("Error getting file view:", error);
            return null;
        }
    }
}

const service = new Service()
export default service


