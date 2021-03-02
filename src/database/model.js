const candidatesModel = require('./models/candidates.model');

exports.init = async(db) => {
    await candidatesModel.init(db);
}