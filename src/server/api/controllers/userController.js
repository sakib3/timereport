const mongoose = require('mongoose');
const model = mongoose.model('TimeReport');
exports.getUsers =
  function (req, res) {
    model.find().distinct('user_name', function(err, data){
      res.json(data);
    });
  };
