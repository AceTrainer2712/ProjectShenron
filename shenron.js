const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.token);
/* #general CID in ACEBOTTEST: '303554856948465664' */

client.on('ready', () => {
	console.log('I have been summoned.');
});

client.on('message', (message) => {
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  if(message.content.startsWith(config.prefix + 'ping')) {
    message.channel.send('pong!');
  }
});