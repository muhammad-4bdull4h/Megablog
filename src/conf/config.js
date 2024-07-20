const conf = {
  appWriteUrl: String(process.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(process.env.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(process.env.VITE_APPWRITE_DATABASE_ID),
  appWriteBucketId: String(process.env.VITE_APPWRITE_BUCKET_ID),
  appWriteCollectionId: String(process.env.VITE_APPWRITE_COLLECTION_ID),
};

export default conf;
