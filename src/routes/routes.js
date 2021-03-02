const express = require('express');

const app = express();

const webRoute = require('./web/web');
const candidateRoute = require('./candidates/candidates');

app.use('/', webRoute);
app.use('/candidate', candidateRoute);

module.exports = app;