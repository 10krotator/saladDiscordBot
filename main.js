const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const token = process.env.TOKEN;


client.once('ready', () => {
    console.log('Saladbot is online!')
})









client.login(token);