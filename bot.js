var twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

// Want the twit bot to reply to the user so I have to make it active

var Twitter = new Tweetpackage(Bot);

// This should follow the person that follows the bot

stream.on('follow', followed);

Twitter.stream('statuses/filter', {track: '#animebot'}, function(stream) {
    stream.on('data', function(tweet) {
        console.log(tweet.text);
        var reply = {status: "Yo @"+ tweet.user.screen_name + ", What do you want?"};
        Twitter.post('statuses/update', reply, function(error, tweetReply, response){
            if(error){
                console.log(error);
            }
            console.log(tweetReply.text);
        });
    });
    stream.on('error', function(error) {
        console.log(error);
    });
});



var phraseArray = [ "Ohayou Gozaimasu!!",
    "Konnichiwa!!!",
    "Hisashiburi!!!",
    "Suki desu.....",
    "Mada tabete imasen.",
    "Onaka ga suite imasu.",
    "Itadakimasu!",
    "Irasshaimase!!",
    "Kore wa nan desu ka?!",
    "Meado o shiete moraemasu ka?",
    "Kite kudasai ne."];

//nouns for generic relatives, I.E mom, dad, aunt etc

var japNouns = ["Ka", "To", "Ba", "Ji", "Obachan", "Ojichan", "Nii", "Ne",
                "Ototo", "Imouto"];

//animes and manga that the bot will be choosing from
var japManga = ["Bleach", "Naruto", "Boruto", "One Piece", "Shippuden",
                "DBZ", "Nisekoi", "Outlaw Star", "Cowboy Bebop", "Kimi No Wa",
                "Kimi no Iru Machi", "Akame ga Kill", "Space Dandy", "Inuyasha"];

//Honorifics cuz the bot has to get really japanese with it
var japEnds = ["-san", "-chan", "-chi", "-sama", "-kun", "-bo"];

function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
// Function for replying to the user who followed the bot
// function followed(event){
//     console.log('Follow Event is running.....');
//     // Gotta grab that good ole twitter handle
//
//     var
//         name = event.source.name;
//         screenName = event.source.screen_name;
//     // This should reply to with a sentence
//     tweetNow('@'+ screenName + ' What the heck are you following me for?')
// }
//
// // this is validation to see if the tweet go to the user who followed
// function tweetNow(tweetTxt) {
//     var tweet = {
//         status: tweetTxt
//     };
//     Twitter.post('statuses/updates', tweet, function(err, data, response){
//         if(err){
//             console.log("There's something wrong here......")
//         }
//         else{
//             console.log('Lots of Love!')
//         }
//     });
// }

var phrase = chooseRandom(phraseArray) + " Today my " + chooseRandom(japNouns) + chooseRandom(japEnds) +
    " told me about " + chooseRandom(japManga) + "."+ " Should I read it?";
console.log(phrase);
Bot.tweet(phrase);