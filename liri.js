require("dotenv").config();
var keys = require('./assets/javascript/keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var myTweets = function() {

  var client = new Twitter(keys.twitter);

  var params = {
    screen_name: 'SchoolTestAcco1',
    count: 20
  }
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log('------------');
        console.log(tweets[i].text);
      }
    }

  });

  var getArtistName = function(artist){
    return artist.name;
  }

}

var song = function(songName){
var spotify = new Spotify(keys.spotify);
spotify.search({type: 'track', query: songName},
function(err, data) {
    if (err) {
     console.log(err);// something is messed up will error xxx
      return;
    }
    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++){
      console.log(i);
      // console.log(songs[i])
      console.log('artist:' + songs[i].artists.map(function(artist) {
        return artist.name
      }))
        console.log('song name:' + songs[i].name);
        console.log('preview song:' + songs[i].preview_url);
        console.log('----------');

    }
  });
}

var choose = function(command, functionData) {
  switch (command) {
    case 'my-tweets':
      myTweets();
      break;
    case 'spotify-this-song':
      song(functionData);
      break;
    default:
    console.log('I do not know...');
  }
}

var run = function(arg1, arg2) {
  choose(arg1, arg2);

};
run(process.argv[2], process.argv[3]);


// var song = function(){

//   song.search({type:'track', query:'I Want it That Way'}),
//     function(err, data) {
//       if(err){
//         console.log('Not Working');
//         return;
//       }
//       console.log(data);
//     }
//   };
