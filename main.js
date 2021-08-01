const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
require('dotenv').config();
const token = process.env.TOKEN;
const giphy_api_key = process.env.GIPHYAPIKEY;


const prefix = '-';




// pictures of harmonia from imgur
const harmonia = ['https://imgur.com/NT1hQEQ',
'https://imgur.com/Djsj7QD',
'https://imgur.com/alwksZN',
'https://imgur.com/6B5TaSR',
'https://imgur.com/tQ2L42x',
'https://imgur.com/c3WxfFG',
'https://imgur.com/XMJPlU0',
'https://imgur.com/n8KhfzF',
'https://imgur.com/guBppgi',
'https://imgur.com/53jHl2R',
'https://imgur.com/nUCWvFT',
'https://imgur.com/FYcZmdM',
'https://imgur.com/SdBcTK3',
'https://imgur.com/ZXxo92l',
'https://imgur.com/oDz8iVW'];





// pictures of ferrets from giphy
const giphy_url = "https://api.giphy.com/v1/gifs/search?api_key=";
const giphy_endpoint = "&q=ferret&limit=50&offset=0&rating=g&lang=en";
const ferret_api = giphy_url + giphy_api_key + giphy_endpoint;
// API request for 25 ferret gifs

// End of API request


client.once('ready', () => {
    console.log('Saladbot is online!');
});

client.on('message', MessageFN);

async function MessageFN(message){
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
    else if(command === 'ferret'){
        let response = await fetch(ferret_api);
        let json = await response.json();
        let index = Math.floor(Math.random()*json.data.length);
        //console.log(json);
        message.channel.send(json.data[index].url);
    }
    else if(command === 'salad'){
        message.channel.send('https://imgur.com/pf1tx1K');
    }
    else if(command === 'baguette'){
        message.channel.send('https://media.giphy.com/media/fuEldTzs9rsJ0GDFoM/giphy.gif');
    }
    else if(command === 'whosthis'){
        message.channel.send('I am only a Baguette de pain complet :333');
    }
    else if(command === 'harmonia'){
        let index = Math.floor(Math.random()*harmonia.length);
        message.channel.send(harmonia[index]);
    }
}










client.login(token);