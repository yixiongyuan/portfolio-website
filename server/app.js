const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


// const postsRoutes = require('./routes/posts');
// const userRoutes = require('./routes/user');

const app = express();

mongoose.connect("mongodb+srv://zachyyuan:40BNs8rmz4cgUkAk@cluster0.acjjll8.mongodb.net/zach-profile?w=majority")
    .then(() => {
        console.log("connected to database");
    })
    .catch(() => {
        console.log("connection failed");
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/daily", express.static(path.join("daily")));
app.use("/", express.static(path.join(__dirname, "angular")));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PATCH,PUT,DELETE,OPTIONS"
    );
    next();
})

// app.use("/api/posts", postsRoutes);
// app.use("/api/user", userRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html"));
})


module.exports = app;