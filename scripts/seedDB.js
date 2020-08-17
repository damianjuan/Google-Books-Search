const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        title: "title",
        authors: "authors",
        description: "summary",
        image: "thumbnail",
        link: "linkURL"
    },
    {
        title: "title2",
        authors: "authors2",
        description: "summary2",
        image: "thumbnail2",
        link: "linkURL2"
    }
];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
