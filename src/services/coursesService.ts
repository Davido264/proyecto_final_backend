import {
  Document,
  InsertOneResult,
  ObjectId,
  UpdateResult,
  WithId,
} from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const cursesCollectionName = 'courses';

async function getCourses(query = {}): Promise<WithId<Document>[]> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(cursesCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}

async function getCourse(id: string): Promise<WithId<Document> | null> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(cursesCollectionName)
      .findOne({ _id: new ObjectId(id) });
  } finally {
    client.close();
  }
}

async function addCourse(course: any): Promise<InsertOneResult<Document>> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(cursesCollectionName)
      .insertOne(course);
  } finally {
    client.close();
  }
}

async function modifyCourse(id: string, course: any): Promise<UpdateResult> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(cursesCollectionName)
      .updateOne({ _id: new ObjectId(id) }, { $set: course });
  } finally {
    client.close();
  }
}

export default { getCourse, getCourses, addCourse, modifyCourse };
