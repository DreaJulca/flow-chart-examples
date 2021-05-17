//const fs = require('fs'); // file system--probably will not need this time
const assert = require('assert');
const express = require('express'); // main library for server-client routing
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser'); //cleans our req.body
const mongoose = require('mongoose');
const nodeRoutes = require('./routes/nodes');
const linkRoutes = require('./routes/links');

// Database URL and Name
const url = 'mongodb://localhost:27017/';
const dbName = 'workflows';

mongoose.connect( url+dbName, { useNewUrlParser : true });

const app = express();

app.use(bodyParser.json());

app.use("/api/v1/nodes", nodeRoutes);
app.use("/api/v1/links", linkRoutes);

const PORT = process.env.PORT || 3050;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.use(express.static(__dirname + '/public'))

app.listen(PORT, function(){
    console.log("Node Server is Running");
});
