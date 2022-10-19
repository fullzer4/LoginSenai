const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "uri";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('db');
    const movies = database.collection('coelcao');

    // Query for a movie that has the title 'Back to the Future'
    const query = { query: "query" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);