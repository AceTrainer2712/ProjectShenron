const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.login(config.token);


/* #general CID in ACEBOTTEST: '303554856948465664' */

client.on('ready', () => {
	var y = 'I have been summoned.';
	console.log(y);
	
	const channel = client.channels.get("name","general").id;

	client.channels.get("id",channel).send('I am Shenron. Speak your wishes.');
	
});

function output(error) {
	if (error) {
		console.log('There was an error in initialising');
	} else{
		console.log('Initialising complete.')
	}
}

client.on('message', (message) => {
  if (message.content.startsWith('ping')) {
    message.channel.send('pong!');
  }
});