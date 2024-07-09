const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const Room = require("./Models/room");
const app = express();
app.use(cors());


mongoose.connect(process.env.DB, { 
   // useNewUrlParser: true,
    //useUnifiedTopology: true,
}).then(() => console.log("connected to database"));

app.get("/",async(req, res) => {
    await Room.insertMany([
        {
            room:"자바스크립트 단톡방",
            members: [],
        },
        {
            room:"리액트 단톡방",
            members: [],
        },
        {
            room:"NODE JS 단톡방 ",
            members: [],
        },
    ])

        .then(() => res.send("ok"))
        .catch((error) => res.send(error));
});

module.exports = app;