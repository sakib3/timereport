const express = require('express');
const app = express();
const controller = require('../controllers/timeReportController');

app.route('/timereport').get(controller.getTimeReportForAll)
                        .post(controller.getTimeReportForUser);

module.exports = app;
