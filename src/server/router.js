//const mongoose = require('mongoose');
const config = require('./config');
const userRoutes = require('./api/routes/userRoutes');


//mongoose.Promise = global.Promise;
//mongoose.connect(config.mongoURI, {useMongoClient: true});

module.exports = {
    api: [userRoutes]
};
