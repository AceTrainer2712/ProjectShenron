const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.token);

/* #general CID in ACEBOTTEST: '303554856948465664' */
const id = '303554856948465664';

client.on('ready', () => {
	console.log('I have been summoned.');

	client.channels.get(id).send('I am Shenron. Speak your wishes.');
	
});

function output(error) {
	if (error) {
		console.log('There was an error in initialising');
	} else{
		console.log('Initialising complete.')
	}
}

client.on('message', (message) => {
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  if(message.content.startsWith(config.prefix + 'ping')) {
    message.channel.send('pong!');
  }
});