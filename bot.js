var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

// Want the twit bot to reply to the user so I have to make it active

var stream = Twitter.stream('user');

// This should follow the person that follows the bot

stream.on('follow', followed);

var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

var phraseArray = [ "hey twitter",
    "im tweeting",
    "tweet tweet",
    "tweetstorm time... 1/22",
    "plz RT v important",
    "delete ur account",
    "it me",
    "same",
    "#dogpants go on 4 legs!!",
    "#thedress is blue and black" ];

function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
// Function for replying to the user who followed the bot
function followed(event){
    console.log('Follow Event is running.....');
    // Gotta grab that good ole twitter handle

    var
        name = event.source.name,
        screenName = event.source.screen_name;
    // This should reply to with a sentence
    tweetNow('@'+ screenName + ' What the heck are you following me for?')
}

// this is validation to see if the tweet go to the user who followed
function tweetNow(tweetTxt) {
    var tweet = {
        status: tweetTxt
    };
    Twitter.post('statuses/updates', tweet, function(err, data, response){
        if(err){
            console.log("There's something wrong here......")
        }
        else{
            console.log('Lots of Love!')
        }
    });
}

var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);
Bot.tweet(phrase);