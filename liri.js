// Include the request npm packages (Don't forget to run "npm install ____" in this folder first!)
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var keys = require("./.gitignore/keys.js");

//test connection to keys and vars
console.log(keys.twitterKeys);
console.log(keys.spoifyKeys);