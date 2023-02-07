import {
  DeleteResult,
  Document,
  InsertOneResult,
  ObjectId,
  UpdateResult,
  WithId,
} from 'mongodb';
import { createClient, getDbName } from './mongo.js';

const subscriptionCollectionName = 'subscriptions';

async function getSubscriptions(query = {}): Promise<WithId<Document>[]> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(subscriptionCollectionName)
      .find(query)
      .toArray();
  } finally {
    client.close();
  }
}

async function getSubscription(id: string): Promise<WithId<Document> | null> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(subscriptionCollectionName)
      .findOne({ _id: new ObjectId(id) });
  } finally {
    client.close();
  }
}

async function createSubscription(
  subscription: any
): Promise<InsertOneResult<Document>> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(subscriptionCollectionName)
      .insertOne(subscription);
  } finally {
    client.close();
  }
}

async function deleteSubscription(id: string): Promise<DeleteResult> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(subscriptionCollectionName)
      .deleteOne({ _id: new ObjectId(id) });
  } finally {
    client.close();
  }
}

async function modifySubscription(
  id: string,
  subscription: any
): Promise<UpdateResult> {
  const client = createClient();
  try {
    return await client
      .db(getDbName())
      .collection(subscriptionCollectionName)
      .updateOne({ _id: new ObjectId(id) }, { $set: subscription });
  } finally {
    client.close();
  }
}

export default {
  getSubscriptions,
  getSubscription,
  createSubscription,
  deleteSubscription,
  modifySubscription,
};
