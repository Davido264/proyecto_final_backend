import { MongoClient, ServerApiVersion } from 'mongodb';

function getDbName() {
  return process.env.MONGO_DB;
}

function createClient() {
  return new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
}

export { createClient, getDbName };
