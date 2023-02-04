import { MongoClient, ServerApiVersion } from 'mongodb';

function getDbName(): string {
  return process.env.MONGO_DB as string;
}

function createClient(): MongoClient {
  return new MongoClient(process.env.MONGO_URL as string, {
    serverApi: ServerApiVersion.v1,
  });
}

export { createClient, getDbName };
