// Dependencies
  const express = require("express");
  const bodyParser = require("body-parser");
  const mongoose = require("mongoose");
  const request = require("request");
  // const Note = require("./models/Note.js");
  const Article = require("./models/Article.js");
  // Initialize Express
  const app = express();

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

//Use body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect(
  "mongodb://localhost/nytreact"
);

const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listen on port 3000
  app.listen(process.env.PORT || 3000, () => {
    console.log("App running on port 3000!");
  });
