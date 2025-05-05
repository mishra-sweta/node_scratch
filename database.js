const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://swetacodes:8uEnFxhUreWmJbFs@namastenode.bs6ertn.mongodb.net/";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    const db = client.db("test");
    const collection = db.collection("User");

    //Sample insert
    // const result = await collection.insertMany([
    //   {
    //     firstname: "Kinjan",
    //     lastname: "Shaw",
    //     city: "Ranchi",
    //     createdAt: new Date(),
    //   },
    //   {
    //     firstname: "Anushka",
    //     lastname: "Mishra",
    //     city: "Kolkata",
    //     createdAt: new Date(),
    //   },
    // ]);

    // const query = { firstname: "Subham" };
    // const update = { $set: { firstname: "Subham", city: "Kolkata" } };
    // const options = {};
    // collection.updateOne(query, update, options);

    await collection.deleteOne({ city: "Ranchi" });

    const all = await collection.find({}).toArray();
    console.log("Users => ", all);

    await collection.deleteOne({ city: "Ranchi" });
  } catch (err) {
    console.error("❌ MongoDB error:", err);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
