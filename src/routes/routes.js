const express = require('express');

const app = express();

const webRoute = require('./web/web');

app.use('/', webRoute);

module.exports = app;