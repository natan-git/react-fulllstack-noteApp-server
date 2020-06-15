const MongoClient = require('mongodb').MongoClient;

// Connection URL
// const url =
//   false && process.env.NODE_ENV === 'production'
//     ? 'mongodb+srv://natan:skate4life@cluster0-u9ykt.mongodb.net/test?retryWrites=true&w=majority'
//     : 'mongodb://localhost:27017';
const url='mongodb+srv://natan:skate4life@cluster0-u9ykt.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'note_db'; 
var dbConn = null;

async function connect() {
  if (dbConn) return dbConn;
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(dbName);
    dbConn = db;
    return db;
  } catch (err) {
    console.log('Cannot Connect to DB', err);
    throw err;
  }
}

async function getCollection(collectionName) {
  const db = await connect();
  return db.collection(collectionName);
}

module.exports = {
  // connect,
  getCollection,
};
