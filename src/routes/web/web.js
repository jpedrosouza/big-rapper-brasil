const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../../../public')));
app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: false }));
app.set('views', __dirname + '/../../views');
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    return res.render('index');
});

app.get('/registrar', (req, res) => {
    return res.render('register');
});

app.get('/votar', (req, res) => {
    return res.render('vote');
});

app.get('/vencedor-momento', (req, res) => {
    return res.render('momment-winner');
});


module.exports = app;