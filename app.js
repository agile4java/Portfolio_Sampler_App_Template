const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const serveStatic = require('serve-static');
// const mongoose = require("mongoose");

const useRoutes = require("./routes/useRoutes");
//const gridsterRoutes = require("./routes/gridsterRoutes");


// create promise to be used by express handlebars methods
let Promise = global.Promise || require('promise');

const app = express();
app.use("/public", serveStatic(path.join(__dirname, "public")));
app.use("/static", serveStatic(path.join(__dirname, 'static')));

// create expresshandlbars instance with a default layout
var hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: 'views/layouts',
  // Can use multiple partials directories
  partialsDir: [
    'views/partials',
    'views/partials/scripts'
  ]
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');





app.get('/user', (req, res, next) => {
  res.render('user', {layout: 'main'});
})
// app.use("/api", useRoutes);

//app.use("/gridster", gridsterRoutes);
app.get('/gridster', (req, res) => {
  res.render('gridster', {layout: 'main'});
});

app.get('/', (req, res, next) => {
    res.render('home', {layout: 'main'});
})



module.exports = app;

