
const express = require('express');
const app = express();
const user = require('../controllers/userController');

app.route('/username').get(user.getUsername);

module.exports = app;
