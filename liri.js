require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require("request");
var fs = require("fs");

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);


var parameter = process.argv[2];

if (parameter === "my-tweets") {
    console.log("tweet function");
    myTweet();
} else if (parameter === "spotify-this-song") {
    console.log("spotify function");
    mySpotify();
} else if (parameter === "do-what-it-says") {
    console.log("random function");
    myRandom();
} else {
    console.log("enter a value");
}

function myTweet() {
    var params = {
        q: 'Billymountain',
        count: 20
    }
}

client.get('search/tweets', params, function (error, tweets, response) {
    for (var i = 0; i < (tweet.status).length; i++) {
        console.log("\nBillymountain says:" + tweet.status[i].text);
    }
});

function mySpotify() {
    var songName = "";
    nodeArrg = process.argv;
    if (nodeArrg.length === 3) {
        songName = "Feeling This";
    } else {
        for (var i = 3; i < nodeArrg.length; i++) {
            if (i > 3 && i < nodeArrg.length) {
                songName = songName + "+" + nodeArrg[i];

            } else {
                songName += nodeArrg[i];
            }
        }
    }
}

spotify.search({
            type: 'track',
            query: songName
        }, function (err, data) {
            if (err) {
                console.log('Error:' + err);

            } else {
                var song_data = data.tracks.items[0];
                console.log("\nArtist:" + song_data.artists[0].name);
                console.log("\nSong name is  : " + song_data.name);
                console.log("\nPreview : " + song_data.preview_url);
                console.log("\nAlbum is : " + song_data.album.name + "\n");
            };
        });
    