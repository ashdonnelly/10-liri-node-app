// Include the request npm packages (Don't forget to run "npm install ____" in this folder first!)
var twitter = require("twitter");
var keys = require("./.gitignore/keys.js");
var spotify = require("node-spotify-api");
var request = require("request");

//test connection to keys and vars
console.log(keys.consumer_key);
console.log(keys.consumer_secret);
console.log(keys.access_token_key);
console.log(keys.access_token_secret);
console.log(keys);
console.log(keys.twitterKeys);