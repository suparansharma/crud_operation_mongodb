const express = require('express');
const app = express();

app.get('/',(req,res) => {

    res.send('Hello I am working');

})


const password ="gxtcrX4rleTWPYWw";

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://organicUser:7tvCHhEbhVCZFefy@cluster0.xmxhi.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("organicdb").collection("products");
  const product = {name:"modhu",price:25,quantity:10};
  collection.insertOne(product)
  .then(result => {
      console.log('one product inserted');
  })
  console.log("database connection");
  // perform actions on the collection object
//   client.close();
});


app.listen(3000);