import { MongoClient } from 'mongodb';

const dbName = process.env.MONGO_DB;

function createClient() {
  return new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { createClient, dbName };
