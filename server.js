const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//use this one for running local
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// use this one for deploying
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password123@ds213209.mlab.com:13209/heroku_n5dqxntm");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
