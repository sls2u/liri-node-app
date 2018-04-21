// add code to read and set any environment variables with the dotenv package
// require("dotenv").config();
// function with a local file path as the function’s only argument
var keys = require('./assets/javascript/keys.js');
// fs is Core node package for reading and writing files
// var fs = require('fs');
// var params = {
//   screen_name: 'nodejs'
// };

//  access your keys information;
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

//creating myTweets function to call from swtich statment
// function myTweets() {

    //creating params variable to pass the object into myTweets function
    var params = {
      screen_name: 'SchoolTestAcco1',
      count: 20
    }
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      // if this is not an error
      if (error) {
        // should print out tweets and calls from parameter
          console.log('tweets')
        }
      });

   //      //loop thru all the tweets
   //      for (var i = 0; i < tweets.length; i++) {
   //        //print out whatever tweet position currently for created at attr
   //        console.log(tweets[i].created_at)
   //        //printing out line for space readability
   //        console.log('------------');
   //        //printing out tweets associated at it
   //        console.log(tweets[i].text);
   //       }
   //      }
   // });
  // } //end of myTweets Function

// create swtich statement to hole diff argument from user
//  var userPick = function(command, functionData){
//  switch(command){
//    case "my-tweets":
//    myTweets();
//    break;
//    default:
//    console.log('"Warning, I do not know that..."')
//  }
// }
// // var runThis = function(arg1, arg2){
//   choose(arg1, arg2);
// }
// //user input= arg2 user information wanting
// runThis(process.argv[2], process.argv[3])
//
//  // create a switch-case statement directing which function gets run.
// //  switch (command) {
// //    case "my-tweets":
// //      myTweets();
// //      break;
// //      default:
// //      console.log('I do not know...')
// //
// //    case 'spotify-this-song':
// //      spotifySong();
// //      break;
// //
// //    case 'movie-this':
// //      movieThis();
// //      break;
// //
// //    case 'do-what-it-says':
// //      doSay();
// //      break;
// //  }
// //
// // //
// //  access your keys information;
// // var spotify = require('spotify');
// // var spotifyAPI = newSpotify(keys.spotify);
// // var SpotifyWebApi = require('spotify-web-api-node');
// //
// // var spotifyApi = new SpotifyWebApi();
// // //  returns an array containing the command line arguments passed when the Node.js process was launched. 0=nde 1=relative file path
// // var command = process.argv[3];
// //
// //
// // function spotify() {
// //   var info = {
// //     songname: 'I saw the signs',
// //     getArtist: function artist() {
// //       // Get an artist
// //       spotifyApi.getArtist('ce45919921414543ad56a416bf4c2381')
// //         .then(function(data) {
// //           console.log(this.getArtist, data.body);
// //         }, function(err) {
// //           console.error(err);
// //         })
// //     }
// //
// //   }
// //
// // )};
