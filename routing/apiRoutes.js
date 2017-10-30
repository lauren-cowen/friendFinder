var express = require('express'),
path = require('path'),
router = express.Router(),
friends = require('./../app/data/friends.js');

var requests = {
	api: function(req, res) {
		 return res.json(friends);
	}
}

module.exports = requests;