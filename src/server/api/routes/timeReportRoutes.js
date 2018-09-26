const express = require('express');
const app = express();
const user = require('../controllers/timeReportController');

app.route('/timereport').get(user.getTimeReport);

module.exports = app;
