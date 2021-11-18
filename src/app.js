'use strict';

const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();

// Load routes
const indexRoute = require('./routes/index-route');
const twitterRoute = require('./routes/twitter-route');

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(express.static(__dirname + '/public'));

app.use("/", indexRoute);
app.use("/twitter", twitterRoute);

module.exports = app;