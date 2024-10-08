const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');

const db = require("./config/mongoose-connection");
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.JWT_KEY,
    })
);
app.use(flash());

// Route
const HomeRouter = require("./routes/HomeRouter");
const UserRouter = require("./routes/UserRouter");

app.use("/", HomeRouter);
app.use("/User", UserRouter);

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
