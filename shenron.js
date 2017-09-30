const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var giveCake = require('./cake.js');

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
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === 'ping') {
    message.channel.send('pong!');
  }

  if(command === 'cake') {

  	let cakes = message.content.split(' ').slice(1);
  	let target = cakes[0];
  	//giveCake.func(target);
  	message.channel.send(':cake:  |  ** ' + message.author + ' has given ' + target + ' a slice of cake! **');
  }

    if(command === 'setcolor') {
    //select hex code if command is s!setcolor FF00000 RoleName
    let hex = args[0];
    let author_role = args.slice(1).join(" ");
    let roleid = message.guild.roles.find("name", author_role);
    
    message.guild.roles.find("name", author_role).setColor(hex)
      .then(r => console.log(`Set color of role ${r}`))
      .catch(console.error);

    message.channel.send('Your color has been changed, ' + message.author + '! Enjoy your new colour :)');
  }