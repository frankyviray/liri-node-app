require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require("request");
var fs = require ("fs");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);


var parameter = process.argv[2];

if (parameter === "my-tweets"){
    console.log("tweet function");
    myTweet();
} else if (parameter === "spotify-this-song"){
    console.log("spotify function");
    mySpotify();
} else if (parameter === "do-what-it-says"){
    console.log("random function");
    myRandom();
}else {
    console.log("enter a value");
}

function myTweet(){
    var params = {screen_name: 'Billymountain'};
    count: 20
}


