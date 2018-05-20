/* BEGIN JAVASCRIPT*/
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8000;

var friends = [
  {
    name: "Brian Dawkins",
    photo: "file:///Users/briandawkins/Desktop/branching.png",
    q1: 1,
    q2: 1,
    q3: 1,
    q4: 1,
    q5: 1,
    q6: 1,
    q7: 1,
    q8: 1,
    q9: 1,
    q10: 1
  }
];

app.get("/api/friends", function(req, res) {
    res.json(friends);
      });

  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


/* END jAVASCRIPT*/