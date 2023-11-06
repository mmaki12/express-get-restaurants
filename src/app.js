const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.get("/books", async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
})



module.exports = app;