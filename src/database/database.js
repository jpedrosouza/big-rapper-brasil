const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const model = require('./model');
const controller = require('./controller');

exports.init = async() => {
    const db = await sqlite.open({
        filename: './database.db',
        driver: sqlite3.Database,
    });

    await model.init(db);

    return db;
}