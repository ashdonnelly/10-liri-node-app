// Include the request npm packages (Don't forget to run "npm install" in this folder first!)
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var keys = require("./keys.js");

//grab data from keys.js
var twitterConsumerKey = keys.twitterKeys.consumer_key;
var twitterConsumerSecret = keys.twitterKeys.consumer_secret;
var twitterAccessTokenKey =  keys.twitterKeys.access_token_key;
var twitterAccessTokenSecret = keys.twitterKeys.access_token_secret;
var spotifyClientID = keys.spotifyKeys.client_id;
var spotifyClientSecret = keys.spotifyKeys.client_secret;

var client = new Twitter ({
    consumer_key: twitterConsumerKey,
    consumer_secret: twitterConsumerSecret,
    access_token_key: twitterAccessTokenKey,
    access_token_secret: twitterAccessTokenSecret
});

var spotify = new Spotify ({
    id: spotifyClientID,
    secret: spotifyClientSecret
});

// COMMANDS

// process.argv commands and vars
var input = process.argv;
var command = input[2];
var songOrMovieTitle = input[3];
console.log('You are using command: "' + command + '"');
console.log('To search for: "' + songOrMovieTitle + '"');

// 1
// node liri.js my-tweets
// show your last 20 tweets and when they were created
if (command == "my-tweets"){
    client.get('statuses/user_timeline', function(error, tweets, response) {
        if(error) throw error;
        console.log(tweets);
        console.log(response);
    });
};


// 2
// node liri.js spotify-this-song '<song name here>'
// show info about song -- artist, song name, preview link, album
// default to "The Sign" by Ace of Base (or whatever you want)
if (command == "spotify-this-song"){
    spotify
        .search({type: 'track', query: songOrMovieTitle, limit: 1})
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        });
};


// 3
// node liri.js movie-this '<movie name here>'
// show info about movie -- title, year, IMDB rating, rotten tomatoes rating, country filmed in, language, plot, actors
// default is "Mr. Nobody"
// use OMBD API, key is "trilogy"



// 4
// node liri.js do-what-it-says
// using fs node package, ake the text inside random.txt and use it to call oe of LIRI's commands
// it should run spotify-this-song for the song in random.txt


