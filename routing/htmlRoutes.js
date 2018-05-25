/* BEGIN JAVASCRIPT*/
var express = require("express");
var bodyParser = require('body-parser');

var path = require("path");
var friendPossibilities = require('../app/friends.js');
var app = express();
var PORT = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});



app.get("/api/friends", function (req, res) {
  res.json(friendPossibilities);
});

app.post("/api/friends", function (req, res) {

  var newFriend = req.body;
  var numberFriend = [parseInt(newFriend.q1), parseInt(newFriend.q2), parseInt(newFriend.q3),
  parseInt(newFriend.q4), parseInt(newFriend.q5), parseInt(newFriend.q6),
  parseInt(newFriend.q7), parseInt(newFriend.q8), parseInt(newFriend.q9),
  parseInt(newFriend.q10)];
  // console.log(numberFriend);


  var sumNewFriend = 0;
  for (var i = 0; i < numberFriend.length; i++) {
    sumNewFriend += numberFriend[i];
    // console.log(sumNewFriend);

  }
console.log(friendPossibilities);
  var friendMatch = [];
  var diff = 0;
  for (x = 0; x < friendPossibilities.length; x++) {
    var parseFriendPossibilities = parseInt(friendPossibilities[x].sum);
    console.log(parseFriendPossibilities);
    diff += Math.abs(parseFriendPossibilities - sumNewFriend);
    console.log(diff);
  }
}
);
// Need to figure out how to find the closest match


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});



  /* END JAVASCRIPT*/
