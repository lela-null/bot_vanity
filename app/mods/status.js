const fs = require("fs");
const { ownerId } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: `status`,
	aliases: [`presence`],
	description: `Set the bot's status.`,
	args: true,
	usage: `help`,
	guildOnly: false,
	cooldown: 1,
	execute(client, message, args) {
		if (message.author.id != ownerId) return;

//load file
		setPresence = JSON.parse(fs.readFileSync("./config/setPresence.json", "utf8"));
		name =	setPresence.activity.name;
		type =	setPresence.activity.type;
		status = setPresence.status;

//get slector
		let selector = args[0];
		args.shift();
		args = args.join(" ");

		if (selector != "help" && selector != "type" && selector != "name" && selector != "status") {
			message.channel.send("An invalid selector has been chosen.");
			return;
		}

		if (selector == "help") {
			const embed = new Discord.MessageEmbed()
				.setColor('#FADD34')
				.setTitle('STATUS HELP')
				.addField('Selector', `
\`help\` - Post this help menu.
\`name\` - Change the activity.
\`type\` - Change the type of activity.
\`status\` - Change the status.
	`)
	.addField('Values',`
IF \`name\` - (Anything)
IF \`type\` - \`PLAYING\` or \`WATCHING\`, or \`LISTENING\`
IF \`status\` - \`online\` or \`idle\` or \`dnd\` or \`invisible\`
	`)
			message.channel.send(embed);
			return;
		}

		if (selector == "name") {
			name = args;
		}

		if (selector == "type") {
			args = args.toUpperCase();
			if (args != "LISTENING" && args != "PLAYING" && args != "WATCHING") {
				message.channel.send("An invalid type has been provided, use \`LISTNEING\`, \`PLAYING\`, or \`WATCHING\`.");
				return;
			}
			type = args;
		}

		if (selector == "status") {
			args = args.toLowerCase();
			if (args != "online" && args != "idle" && args != "dnd" && args != "invisible") {
				message.channel.send("An invalid status has been provided, use \`online\`, \`idle\`, \`dnd\`, or \`invisible\`.");
				return;
			}
			status = args;
		}

//save to json
        setPresence = {
		    activity: {
		        name: name,
		        type: type
		    },
		    status: status
		};
        fs.writeFile("./config/setPresence.json", JSON.stringify(setPresence, null, 4), (err) => {
            if(err) console.log(err);
        });

//send message
        if (type === "LISTENING") type = "listening to";
        message.channel.send(`I am now ${type.toLowerCase()} ${name} in ${status} mode.`);

//set status
		client.user.setPresence({
			activity: {
				name: name,
				type: type
			},
			status: status
		})
		.then(console.log(`[${time}] - status ${type} ${name} as ${status}.`))
		.catch(console.error);
	},
};
