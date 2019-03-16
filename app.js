const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

const useRoutes = require("./routes/useRoutes");
const gridsterRoutes = require("./routes/gridsterRoutes");


// create promise to be used by express handlebars methods
let Promise = global.Promise || require('promise');

const app = express();



// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, 'static')));

app.use("/api", useRoutes);

app.use("/gridster", gridsterRoutes);

app.get('/', (req, res, next) => {
    res.render('home');
})



module.exports = app;

