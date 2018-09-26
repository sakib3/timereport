const mongoose = require('mongoose');
const config = require('./config');
const TimeReport = require('./api/models/timeReportModel');
const userRoutes = require('./api/routes/userRoutes');
const timeReportRoutes = require('./api/routes/timeReportRoutes');


mongoose.connect(config.mongoURI, { promiseLibrary: global.Promise, useNewUrlParser: true });

module.exports = {
    api: [userRoutes, timeReportRoutes]
};
