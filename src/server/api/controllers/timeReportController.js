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
    var query = {
      user_name: req.body.userName,
      start: { "$gte": req.body.startDate },
      end: { "$lt": req.body.endDate }
    };
    model.find(query, function (err, data) {
      res.json(data);
    });
  };
