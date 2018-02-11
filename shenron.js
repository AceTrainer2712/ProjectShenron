const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var giveCake = require('./cake.js');
let botColor = 3447003;

client.login(config.token);

//const id = '303554856948465664'; // - AceTest Server Rando Test Zone
const id = '363458552389566466'; // role-assignment The Arcade

client.on('ready', () => {
	console.log('I have been summoned.');

	client.channels.get(id).send('I am Shenron. Speak your wishes.');

	//client.presence.status.equals('offline');
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

	if (command === 'help') {
		message.channel.send({embed: {
		color: botColor,
		title: "Help for commands",
		description: 'List of all implementable commands',
		fields: [{
			name: "s!help",
			value: "Creates this helpbox. \n ...."
		},

		{
			name: "s!invite",
			value: "Generates invite link for bot. \n ...."
		},

		{
			name: "s!cake {user}",
			value: "Gives cake to user. \n**Example**: s!cake @Shenron \n ...."
		},

		{
			name: "s!setcolor {hex code for colour} {your personal colour role}",
			value: "Sets color to the personal role that you have assigned to you. Do NOT use the @ symbol. \n**Example**: s!setcolor #000000 Shenron \n ...."
		},
		],

		timestamp: new Date(),
		}});
	}

	if(command === 'ping') {
    message.channel.send('pong!');
  }

	if(command === 'invite') {
    message.channel.send('https://discordapp.com/oauth2/authorize?client_id=' + config.clientID + '&scope=bot');
  }

	if(command === 'exit') {
		if (message.author.id !== config.ownerID && message.author.id !== config.araID) return;
		else {
			message.channel.send({embed: {
			color: botColor,
			description: 'Your wishes have been granted, ' + message.author
			}});

			console.log('Logging off now.');

			client.destroy();
		}
	}

  if(command === 'cake') {
  	let cakes = message.content.split(' ').slice(1);
  	let target = cakes[0];
  	//giveCake.func(target);
  	message.channel.send(':cake:  |  ** ' + message.author + ' has given ' + target + ' a slice of cake! **');
  }

  if((command === 'setcolor') || (command === 'setcolour')) {
    //select hex code if command is s!setcolor FF00000 RoleName
    let hex = args[0];
    let author_role = args.slice(1).join(" ");
    let roleid = message.guild.roles.find("name", author_role);

		if (roleid === null) {
			message.channel.send({embed: {
				color: botColor,
				description: 'Sorry, ' + message.author + '. Please enter a valid role name.'
			}})
		} else {
			if (message.member.roles.has(roleid.id)) {
	    message.guild.roles.find("name", author_role).setColor(hex)
	      .then(r => console.log(`Set color of role ${r}`))
	      .catch(console.error);

	    message.channel.send({embed: {
	      color: botColor,
	      description: 'Your color has been changed, ' + message.author + '! Enjoy your new colour :)'
	    }
	    })
	  	} else {
	      message.channel.send({embed: {
	        color: botColor,
	        description: 'Your role color cannot be changed, ' + message.author + '. Please only choose the role whose colour you are allowed to edit.'
	      }})
	    }
		}
	}
});
