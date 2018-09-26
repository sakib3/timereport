const os = require('os');

exports.getUsername =
  function (req, res) {
    res.json({ username: os.userInfo().username });
  };
