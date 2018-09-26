const mongoose = require('mongoose');
const model = mongoose.model('TimeReport');

exports.getTimeReportForAll =
  function (req, res) {
    model.find({}, function (err, data) {
      res.json(data);
    });
  };

exports.getTimeReportForUser =
  function (req, res) {
    model.find({ user_name: 'kamger' }, function (err, data) {
      res.json(data);
    });
  };
