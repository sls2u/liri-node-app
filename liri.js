require("dotenv").config();
var keys = require('./assets/javascript/keys.js');
var Twitter = require('twitter');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var request = require('request');

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
}

var getArtistName = function(artist) {
  return artist.name;
}


var song = function(songName) {
  var spotify = new Spotify(keys.spotify);
  spotify.search({
      type: 'track',
      query: songName,
    },
    function(err, data) {
      if (err) {
        console.log(err);
        return;
      }
      var songs = data.tracks.items;
      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        // console.log(songs[i])
        console.log('artist:' + songs[i].artists.map(function(artist) {
          return artist.name
        }))
        console.log('song name:' + songs[i].name);
        console.log('album name:' + songs[i].album.name);
        console.log('preview song:' + songs[i].preview_url);
        console.log('----------');

      }
    });
}
var getMovie = function(movieName) {
  var request = require('request');
  request('http://www.omdbapi.com/?t=' + movieName + '&apikey=f0b53495', function(error, response, body) {
      // console.log('error:', error);
      // console.log('statusCode:', response && response.statusCode);
      // console.log('body:', body);
      var jsonData = JSON.parse(body);
      console.log('Title:' + jsonData.Title);
      console.log('year:' + jsonData.Year);
      console.log('IMDB rating:' + jsonData.imdbRating);
      console.log('rotten tomatoes rating:' + jsonData.tomatoRating);
      console.log('country:' + jsonData.Country);
      console.log('language:' + jsonData.Language);
      console.log('plot:' + jsonData.Plot);
      console.log('actors:' + jsonData.Actors);
      console.log('rotten tomatoes url' + jsonData.tomatoURL)
      console.log('---------------------');
  })
};

fs.writeFile('random.txt', 'uft8', function (err, data) {
  if (err) throw err;
  console.log(err);
});

var choose = function(command, functionData) {
  switch (command) {
    case 'my-tweets':
      myTweets();
      break;
    case 'spotify-this-song':
      song(functionData);
      break;
      console.log('I do not know...');
    case 'movie-this':
      getMovie(functionData);
      break;
    default:
      console.log('Not now...');
  }

};


var run = function(arg1, arg2) {
  choose(arg1, arg2);

};
run(process.argv[2], process.argv[3]);
