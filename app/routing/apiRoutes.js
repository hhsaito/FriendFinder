var friendsData = require('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  });

  app.post('/api/friends', function(req, res) {
      // push new data
      friendsData.push(req.body);
     
      newData = req.body.scores;
      // console.log(newData);

      // look through the existing array
    var difference = 0;
    for (var i = 0; i < friendsData.length - 1; i++) {
      for (var j = 0; j< friendsData[i].scores.length; j++) {
    	//console.log(friendsData[i].scores[j]);
    	//console.log(newData[j]);
    	difference += Math.abs(friendsData[i].scores[j] - newData[j]);
    	console.log(difference);
      }
      
    }
     // res.json(friendsData);
  });
}