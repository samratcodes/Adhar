const config = {
  BASE_URL: String(import.meta.env.VITE_APP_APPWRITE_BASEURL),
  ProjectID: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
  DataBaseID: String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
  DocumentsCollectionId: String(
    import.meta.env.VITE_APP_APPWRITE_DOCUMENTS_COLLECTION_ID
  ),
  UsersCollectionId: String(
    import.meta.env.VITE_APP_APPWRITE_USERS_COLLECTION_ID
  ),
  ActivitiesCollectionId: String(
    import.meta.env.VITE_APP_APPWRITE_ACTIVITIES_COLLECTION_ID
  ),
  BucketID: String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID),
};
config;
export default config;
