const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const password ="gxtcrX4rleTWPYWw";


const uri = "mongodb+srv://organicUser:7tvCHhEbhVCZFefy@cluster0.xmxhi.mongodb.net/organicdb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',(req,res) => {

    // res.send('Hello I am working');
    res.sendFile(__dirname + '/index.html');

})






client.connect(err => {
  const productCollection = client.db("organicdb").collection("products");

  app.get('/products',(req,res) => {
    productCollection.find({}).limit(4)
    .toArray((err,documents) =>{
      res.send(documents);
    })
  })

  app.post("/addProduct",(req,res) => {

    const product = req.body;
    productCollection.insertOne(product)
    .then(result =>{
      console.log("data added successfully");
      res.send("success");
    })
    // console.log(product);

  })


//   const product = {name:"modhu",price:25,quantity:10};
//   collection.insertOne(product)
//   .then(result => {
//       console.log('one product inserted');
//   })
//   console.log("database connection");
//   // perform actions on the collection object
// //   client.close();
});


app.listen(3000);