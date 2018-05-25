/* BEGIN JAVASCRIPT*/
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendPossibilities = require('../app/friends.js');
var app = express();
var PORT = process.env.PORT || 4000;

module.exports = function (app) {
	app.get('/api/friends', function(req, res) {
		//console.log(JSON.stringify(friendArray));
		res.json(friendPossibilities);
	});


app.get("/api/friends", function(req, res) {
    res.json(friendPossibilities);
      });

  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
  

  });
  app.post("../app/friends.js", function(req,res) {
    friendPossibilities.push(newFriend);

  });


  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });



/* END jAVASCRIPT*/


// var friendPossibilities = [
//   {
//     name: "Brian Dawkins",
//     photo: "file:///Users/briandawkins/Desktop/branching.png",
//     q1: 1,
//     q2: 1,
//     q3: 1,
//     q4: 1,
//     q5: 1,
//     q6: 1,
//     q7: 1,
//     q8: 1,
//     q9: 1,
//     q10: 1
//   }
// ];
