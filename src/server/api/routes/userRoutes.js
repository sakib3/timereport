
const express = require('express');
const app = express();
const controller = require('../controllers/userController');

app.route('/users').get(controller.getUsers);

module.exports = app;
