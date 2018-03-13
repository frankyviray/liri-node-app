require("dotenv").config();
var keys = require("./keys.js")
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request")
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var command = process.argv[2]

if (command === "my-tweets") {
    fs.appendFile("log.txt", " my-tweets: ", function (err) {
    });
    var params = { screen_name: 'Billymountain' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (let i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
                fs.appendFile("log.txt", " " + tweets[i].text + ",", function (err) {
                });
            }
        }
    });
}

if (command === "spotify-this-song") {
    fs.appendFile("log.txt", " spotify-this-song: ", function (err) {
    });
    var song = "Feeling This"
    if (process.argv[3]) {
        process.argv.splice(0, 3)
        song = process.argv.join(" ")
    }
    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].artists[0].name)
        fs.appendFile("log.txt", " " + data.tracks.items[0].artists[0].name + ",", function (err) {
        });
        console.log(data.tracks.items[0].name)
        fs.appendFile("log.txt", " " + data.tracks.items[0].name + ",", function (err) {
        });
        console.log(data.tracks.items[0].external_urls.spotify)
        fs.appendFile("log.txt", " " + data.tracks.items[0].external_urls.spotify + ",", function (err) {
        });
        console.log(data.tracks.items[0].album.name)
        fs.appendFile("log.txt", " " + data.tracks.items[0].album.name, function (err) {
        });
    });
}
