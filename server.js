const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./src/routes/routes');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

app.use('/', routes);

app.listen(3000, () => {
    console.log(`Server listening at https://localhost:3000`);
});