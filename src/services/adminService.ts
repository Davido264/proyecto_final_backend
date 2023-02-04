import { Document, ObjectId, WithId } from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const adminCollectionName = 'admins';

async function getAdmins(query = {}): Promise<WithId<Document>[]> {
  const client = createClient();
  try {
    return client
      .db(getDbName())
      .collection(adminCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}

async function getAdmin(id: string): Promise<WithId<Document> | null> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(adminCollectionName)
      .findOne({ _id: new ObjectId(id) });
  } finally {
    client.close();
  }
}

export default {
  getAdmin,
  getAdmins,
};
