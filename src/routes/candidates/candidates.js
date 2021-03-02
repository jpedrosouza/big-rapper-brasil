const express = require('express');
const mv = require('mv');
const formidable = require('formidable');
const uuid = require('uuid');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

const controller = require('../../database/controller');

app.use('/images', express.static(path.join(__dirname, '../../../uploads')));
app.use(express.static(path.join(__dirname, '../../../public')));
app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: false }));
app.set('views', __dirname + '/../../views');
app.set('view engine', '.hbs');

app.get('/get-candidates', async(req, res) => {
    const response = await controller.candidates.getAllCandidates();

    return res.json(response);
});

app.post('/add-candidate', async(req, res) => {
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        const newFileName = uuid.v4() + files.candidate_image.name;
        const oldPath = files.candidate_image.path;
        const newPath = __dirname + '../../../../uploads/' + newFileName;


        mv(oldPath, newPath, async(error) => {
            if (error) throw error;

            const response = await controller.candidates.createCandidate({
                name: fields.name,
                featured_music: fields.featured_music,
                image_url: `/images/${newFileName}`
            });

            if (response != null) {
                return res.render('vote');
            } else {
                return res.status(500).end();
            }
        });
    });
});

app.get('/get-winner', async(req, res) => {
    const response = await controller.candidates.getWinner();

    return res.json(response);
});

app.post('/vote', async(req, res) => {
    const { id } = req.body;

    const response = await controller.candidates.vote(id);

    if (response != null) {
        return res.status(200).end();
    } else {
        return res.status(500).end();
    }
})

module.exports = app;