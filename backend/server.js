const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const menurouter = require("./menuapi/menurouter");
const userrouter = require("./userapi/userrouter");
const usercartrouter = require('./usercartapi/usercartrouter')
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cookieParser())
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
  
    // intercept OPTIONS method
    if ("OPTIONS" === req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  });
app.use(menurouter);
app.use(usercartrouter)
app.use(userrouter);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});