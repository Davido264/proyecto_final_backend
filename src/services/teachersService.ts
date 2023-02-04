import {
  Document,
  InsertOneResult,
  ObjectId,
  UpdateResult,
  WithId,
} from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const teacherCollectionName = 'teachers';

async function getTeachers(query = {}): Promise<WithId<Document>[]> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(teacherCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}

async function getTeacher(id: string): Promise<WithId<Document> | null> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(teacherCollectionName)
      .findOne({ _id: new ObjectId(id) });
  } finally {
    client.close();
  }
}

async function addTeacher(teacher: any): Promise<InsertOneResult<Document>> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(teacherCollectionName)
      .insertOne(teacher);
  } finally {
    client.close();
  }
}

async function modifyTeacher(id: string, teacher: any): Promise<UpdateResult> {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(getDbName())
      .collection(teacherCollectionName)
      .updateOne({ _id: new ObjectId(id) }, { $set: teacher });
  } finally {
    client.close();
  }
}

export default {
  getTeachers,
  getTeacher,
  addTeacher,
  modifyTeacher,
};
