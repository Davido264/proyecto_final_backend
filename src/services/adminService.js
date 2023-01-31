import { ObjectId } from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const adminCollectionName = 'admins';

async function getAdmins(query = {}) {
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

async function getAdmin(id) {
  const client = createClient();
  try {
    return client
      .db(getDbName())
      .collection(adminCollectionName)
      .findOne({ _id: new ObjectId(id) })
      .toArray();
  } finally {
    client.close();
  }
}

export default {
  getAdmin,
  getAdmins,
};
