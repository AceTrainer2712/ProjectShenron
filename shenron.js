const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var cakefunc = require('./cake.js');

client.login(config.token);

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

  if(message.content.startsWith(config.prefix + cakefunc.cake)) {
  	cakefunc.cakefn(cakefunc.cake, message.author, cakefunc.target);
  	// message.channel.send(':' + cakefunc.cake + ':' + ' | ' + message.author + ' has given ' + '@' + cakefunc.target + ' a ' + cakefunc.cake + '!');
  }
});