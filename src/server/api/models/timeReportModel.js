const mongoose = require('mongoose');
const TimeReportSchema = new mongoose.Schema({
  user_id: String,
  user_name: String,
  type_id: String,
  hours: Number,
  start: Date,
  end: Date
}, { collection: 'users' });

module.exports = mongoose.model('TimeReport', TimeReportSchema);
