const mongoose = require('mongoose');
const model = mongoose.model('TimeReport');
const moment = require('moment');

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
      let report = data.map(function(d){
        return {
          user_id: d.user_id,
          user_name: d.user_name,
          type_id: d.type_id,
          hours: d.hours,
          start: moment(d.start).format('YYYY-DD-MM'),
          end: moment(d.end).format('YYYY-DD-MM')
        }
      });
      res.json(report);
    });
  };
