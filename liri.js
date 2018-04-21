require("dotenv").config();
var keys = require('./assets/javascript/keys.js');
var Twitter = require('twitter');

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

var choose = function(command, functionData) {
  switch (command) {
    case 'my-tweets':
      myTweets();
      break;
    default:
      console.log('I do not know...');
  }
}

var run = function(arg1, arg2) {
  choose(arg1, arg2);
};
run(process.argv[2], process.argv[3]);
}

var spotify = require('spotify');
spotify.search({type:'song', querry:'I Want it That Way'})
