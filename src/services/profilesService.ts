import {
  DeleteResult,
  Document,
  InsertOneResult,
  ObjectId,
  UpdateResult,
  WithId,
} from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const profileCollectionName = 'profiles';

async function getProfiles(query = {}): Promise<WithId<Document>[]> {
  const client = createClient();
  console.log(getDbName());
  try {
    return await client
      .db(getDbName())
      .collection(profileCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}

async function getProfile(id: string): Promise<WithId<Document> | null> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(profileCollectionName)
      .findOne({ _id: new ObjectId(id) });
  } finally {
    client.close();
  }
}

async function addProfile(profile: any): Promise<InsertOneResult<Document>> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(profileCollectionName)
      .insertOne(profile);
  } finally {
    client.close();
  }
}

async function updateProfile(id: string, profile: any): Promise<UpdateResult> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(profileCollectionName)
      .updateOne({ _id: new ObjectId(id) }, { $set: profile });
  } finally {
    client.close();
  }
}

async function deleteProfile(id: string): Promise<DeleteResult> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(profileCollectionName)
      .deleteOne({ _id: new ObjectId(id) });
  } finally {
    client.close();
  }
}

export default {
  getProfiles,
  addProfile,
  updateProfile,
  getProfile,
  deleteProfile,
};
