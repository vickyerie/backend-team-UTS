const express = require('express');
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connection;
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});

app.get('/', (req, res) => {
    res.send("Welcome to DnD API! :)");
});

mongoose.connect("mongodb+srv://Admin:oUHs2rz2ZNp4avnk@dnd-api.j10wgai.mongodb.net/DnD-API?retryWrites=true&w=majority&appName=DnD-API");

db.once("open", () => {
    console.log("Successfully connected to MongoDB");
});