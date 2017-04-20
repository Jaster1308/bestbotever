var twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
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

var japFood = ["Ramen", "Soba", "Tempura", "Yakitori", "Sushi",
                "Udon", "Sashimi", "Onigiri", "Miso Soup", "Natto",
                "Sukiyaki", "Takoyaki", "Mochi", "Tofu", "Edamame"];

var japPlaces = ["Mount Fuji", "Kinkaku-ji", "Meiji Shrine", "Shinjuku Gyoen",
                    "Itsukushima", "Roppongi", "Odaiba", "Ueno Park", "Tokyo National Museum",
                    "Yoyogi Park", "Arcade"];

var japCultures = ["Kawaii stuff", "Japanese idols", "Manga", "Anime", "Fashion", "Films", "Video Games"];

var reactions = ["good", "awesome", "impeccable", "ugly", "gross", "awful", "very delicious"];

var publicHiragana = ["ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta",
                        "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi",
                        "fu", "he", "ho", "ya", "yu", "yo", "ma", "mi", "mu", "me", "o",
                        "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"];

var publicKatakana = ["n", "wa", "ra", "ya", "ma", "ha", "na", "ta", "sa", "ka", "a", "wi",
                        "ri", "mi", "hi", "ni", "chi", "shi", "ki", "i", "ru", "yu", "mu", "fu",
                        "nu", "tsu", "su", "ku", "u", "we", "re", "me", "he", "ne", "te", "se", "ke",
                        "e", "wo", "ro", "yo", "mo", "ho", "no", "to", "so", "ko", "o"];

var publicKanji = ["ichi", "migi", "ame", "en", "ou", "oto", "shita", "hi", "hana", "kai",
                    "mana", "gaku", "ki", "kyuu", "yasu", "tama", "kane", "kin", "sora", "kuu",
                    "tsuki", "gatsu", "getsu", "inu", "mi", "ken", "go", "kuchi", "kou", "hidari",
                    "san", "yama", "ko", "yon", "shi", "ito", "ji", "mimi", "nana", "kuruma", "te",
                    "jyuu", "de", "shutsu", "onnna", "jyo", "chii", "ue", "mori", "shin",
                    "hito", "jin", "mizu", "tada", "iki", "ao", "yuu", "ishi", "seki", "aka", "seki",
                    "kawa", "saki", "haya", "sou", "kusa", "ahi", "soku", "mura", "son", "oodai",
                    "otoko", "dan", "take", "naka", "chuu", "mushi", "machi", "cho", "ten", "ta", "tuchi",
                    "do", "futa", "nichi", "hai", "iri", "toshi", "nen", "shiro", "haku", "hachi", "hyaku",
                    "bun", "ki", "boku", "hon", "na", "mei", "me", "moku", "ta", "ritsu", "chikara", "riki",
                    "hyashi", "rin", "roku"];

function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

var phrase = chooseRandom(phraseArray) + " Today my " + chooseRandom(japNouns) + chooseRandom(japEnds) +
        " told me about " + chooseRandom(japManga) + "."+ " Should I read it?";

var things = "Today I am going to " + chooseRandom(japPlaces) + " to look at " +
         + chooseRandom(japCultures) + "." + "What else should I do here?!";

var eating = "At " + chooseRandom(japPlaces) + " I tried " + chooseRandom(japFood) +
            ", it was " + chooseRandom(reactions) + '.';

var hira = "What did I just say? " + chooseRandom(publicHiragana) + chooseRandom(publicHiragana) + " " +
    chooseRandom(publicHiragana) + chooseRandom(publicHiragana) + chooseRandom(publicHiragana) + ".";

var kata = "Can anyone understand me? " + chooseRandom(publicKanji) + ', ' + chooseRandom(publicKatakana) +
    chooseRandom(publicKatakana) + chooseRandom(publicKatakana) + ". " + chooseRandom(publicKatakana) +
    chooseRandom(publicKatakana) + chooseRandom(publicKatakana) + '.';

var kanji = "Kanji Kanji Kanji!!!!!! " + chooseRandom(publicKanji) + chooseRandom(publicKanji) + '?' +
    chooseRandom(publicKanji) + chooseRandom(publicKanji) + chooseRandom(publicKanji)+ ", " + chooseRandom(publicKanji) + chooseRandom(publicKanji)+ chooseRandom(publicKanji) + "!";

styles = [phrase, things, eating, hira, kata, kanji];

function mySentences() {
    return chooseRandom(styles)
}

mySentences();

console.log(mySentences());

Bot.tweet(mySentences());



// Want the twit bot to reply to the user so I have to make it active
var Twit = require('twit');
var T = new Twit({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

// var Twitter = new Tweetpackage(Bot);


var stream = T.stream('user');
// This should follow the person that follows the bot

stream.on('follow', followed);

// Function for replying to the user who followed the bot
function followed(event){
    console.log('Follow Event is running.....');
    // Gotta grab that good ole twitter handle

    var name= event.source.name;
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
T.stream('statuses/filter', {track: '#animebot'}, function(stream) {
    stream.on('data', function(tweet) {
        console.log(tweet.text);
        var reply = {status: "Yo @"+ tweet.user.screen_name + ", What do you want?"};
        T.post('statuses/update', reply, function(error, tweetReply, response){
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