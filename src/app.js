'use strict';

const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();

// Load routes
const indexRoute = require('./routes/index-route');
const twitterRoute = require('./routes/twitter-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use("/", indexRoute);
app.use("/twitter", twitterRoute);

module.exports = app;