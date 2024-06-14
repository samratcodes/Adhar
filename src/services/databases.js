import { Client, Databases, Storage, ID } from "appwrite";
import config from "./config";

class DBService {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.BASE_URL) // Your API Endpoint
      .setProject(config.ProjectID); // Your project ID

    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createDocument(
    fullName,
    email,
    location,
    certificateImage,
    profileImage,
    licenseImage,
    verified,
    number,
    qualification,
    experience,
    type
  ) {
    try {
      return await this.database.createDocument(
        config.DataBaseID,
        config.DocumentsCollectionId,
        ID.unique(),
        {
          fullName,
          email,
          location,
          certificateImage,
          profileImage,
          licenseImage,
          verified,
          number,
          qualification,
          experience,
          type,
        }
      );
    } catch (error) {
      console.log("error:creating documents::database", error);
    }
  }

  async getAllDocument() {
    try {
      return await this.database.listDocuments(
        config.DataBaseID,
        config.DocumentsCollectionId
      );
    } catch (error) {
      console.log("Appwrite serive :: getAllActivities :: error", error);
      throw error;
    }
  }

  async toggleVerification(documentId) {
    try {
      // Fetch the current document
      const document = await this.database.getDocument(
        config.DataBaseID,
        config.DocumentsCollectionId,
        documentId
      );

      if (document) {
        // Toggle the verified field
        const updatedDocument = {
          ...document,
          verified: !document.verified, // Toggle the verified field
        };

        // Remove any unexpected attributes that might cause issues
        delete updatedDocument.$collectionId;
        delete updatedDocument.$databaseId;

        // Update the document in the database
        await this.database.updateDocument(
          config.DataBaseID,
          config.DocumentsCollectionId,
          documentId,
          updatedDocument
        );

        return updatedDocument; // Return the updated document
      } else {
        throw new Error("Document not found");
      }
    } catch (error) {
      console.error("Error toggling verification:", error);
      throw error;
    }
  }

  async createActivity(
    title,
    location,
    maxCapacity,
    date_time,
    price,
    description,
    ActivityImage
  ) {
    try {
      return await this.database.createDocument(
        config.DataBaseID,
        config.ActivitiesCollectionId,
        ID.unique(),
        {
          title,
          location,
          maxCapacity,
          date_time,
          price,
          description,
          ActivityImage,
        }
      );
    } catch (error) {
      console.log("error:creating activity::database", error);
    }
  }

  async getActivity(documentId) {
    try {
      return await this.database.getDocument(
        config.DataBaseID,
        config.ActivitiesCollectionId,
        documentId
      );
    } catch (error) {
      console.log("Appwrite serive :: getBlog :: error", error);
      return false;
    }
  }

  async getAllActivities() {
    try {
      return await this.database.listDocuments(
        config.DataBaseID,
        config.ActivitiesCollectionId
      );
    } catch (error) {
      console.log("Appwrite serive :: getAllActivities :: error", error);
      throw error;
    }
  }
  async updateActivity(documentId, userId) {
    try {
      // Fetch the current document
      const document = await this.getActivity(documentId);

      if (document) {
        // Update the enrolled_user array
        const enrolledUsers = document.enrolled_user || [];
        if (!enrolledUsers.includes(userId)) {
          enrolledUsers.push(userId);
        }

        // Update the document with the new array
        return await this.database.updateDocument(
          config.DataBaseID,
          config.ActivitiesCollectionId,
          documentId,
          { enrolled_user: enrolledUsers }
        );
      } else {
        throw new Error("Activity not found");
      }
    } catch (error) {
      console.log("Appwrite service :: updateActivity :: error", error);
      return false;
    }
  }

  //bucket service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(config.BucketID, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.BucketID, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.BucketID, fileId);
  }
}

const dbService = new DBService();
export default dbService;

//  async createUser(fullName, email, password, number, location, address) {
//     try {
//       return await this.database.createDocument(
//         config.DataBaseID,
//         config.UsersCollectionId,
//         ID.unique(),
//         {
//           fullName,
//           email,
//           password,
//           number,
//           location,
//           address,
//         }
//       );
//     } catch (error) {
//       console.log("error:creating user::database");
//     }
//   }
