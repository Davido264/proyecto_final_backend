import { createClient, dbName } from './mongo.js';

const profileCollectionName = 'profiles';

async function getProfiles(query = {}) {
  const client = createClient();
  try {
    return await client
      .db(dbName)
      .collection(profileCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}

async function getProfile(id) {
  const client = createClient();
  try {
    return await client
      .db(dbName)
      .collection(profileCollectionName)
      .findOne(id);
  } finally {
    client.close();
  }
}

async function addProfile(profile) {
  const client = createClient();
  try {
    return await client
      .db(dbName)
      .collection(profileCollectionName)
      .insertOne(profile);
  } finally {
    client.close();
  }
}

async function updateProfile(id, profile) {
  const client = createClient();
  try {
    return await client
      .db(dbName)
      .collection(profileCollectionName)
      .updateOne(id, profile);
  } finally {
    client.close();
  }
}

export default { getProfiles, addProfile, updateProfile, getProfile };
