const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const token = process.env.TOKEN;

const prefix = '-';

const harmonia = ['https://imgur.com/NT1hQEQ',
'https://imgur.com/Djsj7QD',
'https://imgur.com/alwksZN',
'https://imgur.com/6B5TaSR',
'https://imgur.com/tQ2L42x',
'https://imgur.com/c3WxfFG',
'https://imgur.com/XMJPlU0',
'https://imgur.com/n8KhfzF',
'https://imgur.com/guBppgi',
'https://imgur.com/53jHl2R']

client.once('ready', () => {
    console.log('Saladbot is online!')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');
    }
    else if(command === 'ferret'){
        message.channel.send('https://media.giphy.com/media/uMP2hlGA7GYTu/giphy.gif');
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
        message.channel.send(harmonia[Math.floor(Math.random()*harmonia.length)]);
    }
});










client.login(token);