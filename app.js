const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

const useRoutes = require("./routes/useRoutes");


const app = express();

// mongoose
//   .connect(
//     "mongodb+srv://max:" +
//       process.env.MONGO_ATLAS_PW +
//       "@cluster0-ntrwp.mongodb.net/node-angular"
//   )
//   .then(() => {
//     console.log("Connected to database!");
//   })
//   .catch(() => {
//     console.log("Connection failed!");
//   });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/static", express.static(path.join(__dirname, 'static')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api", useRoutes);

app.get('/', (req, res, next) => {
    res.render('home');
})



module.exports = app;
