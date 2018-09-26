const mongoose = require('mongoose');
const config = require('./config');
const userRoutes = require('./api/routes/userRoutes');

mongoose.connect(config.mongoURI, { promiseLibrary: global.Promise, useNewUrlParser: true });

module.exports = {
    api: [userRoutes]
};
