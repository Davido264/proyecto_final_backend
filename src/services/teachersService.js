import { ObjectId } from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const teacherCollectionName = 'teachers';

async function getTeachers(query = {}) {
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

async function getTeacher(id) {
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

async function addTeacher(teacher) {
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

async function modifyTeacher(id, teacher) {
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
