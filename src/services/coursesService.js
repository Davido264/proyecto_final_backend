import { createClient, dbName } from './mongo.js';

const cursesCollectionName = 'courses';

async function getCourses(query = {}) {
  const client = createClient();
  try {
    await client.connect();
    return await client
      .db(dbName)
      .collection(cursesCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}
