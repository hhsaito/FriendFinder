var friendsData = require('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  app.post('/api/friends', function(req, res) {
      // push new data
      friendsData.push(req.body);

      var newData = req.body.scores,
      checkLowest = [],
      lowestScore = 0;
      // console.log(newData);

      // look through the existing array
    for (var i = 0; i < friendsData.length - 1; i++) {
      var difference = 0;
      for (var j = 0; j< friendsData[i].scores.length; j++) {
    	difference += Math.abs(friendsData[i].scores[j] - newData[j]);
      }
      // add score to array
      checkLowest.push(difference);

      // if there are more than one person
      if (i > 0) {
      	if (checkLowest[lowestScore] > checkLowest[i]) {
      	  lowestScore = i;
        }
      }
    }
    res.json(friendsData[lowestScore]);
  });
}