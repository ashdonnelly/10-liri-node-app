// Include the request npm packages (Don't forget to run "npm install" in this folder first!)
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var keys = require('./keys.js');
var fs = require('fs');

//grab data from keys.js
var twitterConsumerKey = keys.twitterKeys.consumer_key;
var twitterConsumerSecret = keys.twitterKeys.consumer_secret;
var twitterAccessTokenKey =  keys.twitterKeys.access_token_key;
var twitterAccessTokenSecret = keys.twitterKeys.access_token_secret;
var spotifyClientID = keys.spotifyKeys.client_id;
var spotifyClientSecret = keys.spotifyKeys.client_secret;
var omdbkey = keys.omdbapi.key;

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

// process.argv vars
var command = process.argv[2];
var songOrMovieTitle = process.argv[3];
// check input
console.log('** YOUR COMMAND: ' + command);
console.log('** SEARCHING FOR: ' + songOrMovieTitle);

// 1
// node liri.js my-tweets
// show your last 20 tweets and when they were created
if (command == 'my-tweets'){
    client
        .get('statuses/user_timeline', function(error, tweets, response) {
            if(error) throw error;

            // console.log(JSON.stringify(tweets, null, 2));
            // console.log(JSON.stringify(response, null, 2));
        });
};


// 2
// node liri.js spotify-this-song '<song name here>'
// show info about song -- artist, song name, preview link, album
// default to "The Sign" by Ace of Base (or whatever you want)
if (command == 'spotify-this-song'){
    spotify
        .search({ type: 'track', query: songOrMovieTitle, limit: 1 }, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
        };
    console.log(JSON.stringify(data, null, 2)); 
    });
};


// 3
// node liri.js movie-this '<movie name here>'
// show info about movie -- title, year, IMDB rating, rotten tomatoes rating, country filmed in, language, plot, actors
// default is "Mr. Nobody"
if (command == 'movie-this'){
    request('http://www.omdbapi.com/?apikey=' + omdbkey + '&', function (error, response, body){
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    });
};

// 4
// node liri.js do-what-it-says
// using fs node package, take the text inside random.txt and use it to call oe of LIRI's commands
// it should run spotify-this-song for the song in random.txt


