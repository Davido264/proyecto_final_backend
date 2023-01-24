import { createClient, dbName } from './mongo.js';

const teacherCollectionName = 'teachers';

async function getTeachers(query = {}) {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(dbName)
      .collection(teacherCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}

async function addTeacher(teacher) {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(dbName)
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
      .db(dbName)
      .collection(teacherCollectionName)
      .updateOne({ $id: id }, teacher);
  } finally {
    client.close();
  }
}

export default {
  getTeachers,
  addTeacher,
  modifyTeacher,
};
