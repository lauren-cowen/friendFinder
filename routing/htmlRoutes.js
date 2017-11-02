var express = require('express'),
path = require('path'),
router = express.Router(),
f = require('./apiRoutes.js');

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/home.html"));
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/survey.html"));
});

router.get('/api/friends', f.api);
router.post('/api/friends', f.findFriend);

module.exports = router;