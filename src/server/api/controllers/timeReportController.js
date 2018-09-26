const mongoose = require('mongoose');
const model = mongoose.model('TimeReport');


exports.getTimeReport =
  function (req, res) {
    model.find({ user_name: 'kamger' }, function(err, data) {
        res.json(data);
    });
  };
