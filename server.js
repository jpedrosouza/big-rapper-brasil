const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./src/routes/routes');
const database = require('./src/database/database');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use('/', routes);

app.listen(3000, () => {

    database.init();

    console.log(`Server listening at https://localhost:3000`);
});