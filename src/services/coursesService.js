import { ObjectId } from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const cursesCollectionName = 'courses';

async function getCourses(query = {}) {
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

async function getCourse(id) {
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

async function addCourse(course) {
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

async function modifyCourse(id, course) {
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
