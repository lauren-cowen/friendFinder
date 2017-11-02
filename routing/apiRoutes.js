var express = require('express'),
path = require('path'),
router = express.Router(),
friends = require('./../app/data/friends.js');

var requests = {
	api: function(req, res) {
		 return res.json(friends);
	},

	findFriend: function(req, res) {

	
		var newFriend = req.body;
		var newfriendScore = newFriend.scores;

		var difference;

		var bestFriend = {
			name: '',
			photo: '',
			compatibility: 1000
			
		};

		for(var i =0; i<friends.length; i++) {
			var aFriend = friends[i];
			difference = 0;
			for(var k =0; k<aFriend.scores.length; k++) {
				var aFriendsScore = aFriend.scores[k];
				var newFriendsAnswer = newfriendScore[k];
				difference += Math.abs(parseInt(newFriendsAnswer) - parseInt(aFriendsScore));
			}
			if(difference<=bestFriend.compatibility) {
				bestFriend.name = aFriend.name;
				bestFriend.photo = aFriend.photo;
				bestFriend.compatibility = difference;
			}
		}
		friends.push(newFriend);
		res.json(bestFriend);
	}


};


	


module.exports = requests;