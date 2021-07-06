//CONST
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.commands = new Discord.Collection();
const { prefix, token, botID } = require('./config.json');
const fs = require('fs');
const cooldowns = new Discord.Collection();
const commandFiles = fs.readdirSync('./mods').filter(file => file.endsWith('.js'));

//load the mods
console.log("Loading mods...");
for (const file of commandFiles) {
	const command = require(`./mods/${file}`);
	client.commands.set(command.name, command);
	console.log(`    ${command.name}`);
}

//on ready set status
client.once('ready', () => {
    let time = new Date().getTime();
    time = new Date(time).toLocaleTimeString();
    client.fetchApplication()
        .then(application => console.log(`\n[${time}] - Obtained application with name: ${application.name}[Bot], owned by ${application.owner.tag}.`))
        .then(application => console.log(`=======================================================================================`))
        .then(application => console.log(`[TIME]---------[USER]-------------[COMMAND]`))
        .catch(console.error);

    setPresence = JSON.parse(fs.readFileSync("./config/setPresence.json", "utf8"));
    var name = setPresence.activity.name;
    var type = setPresence.activity.type;
    var status = setPresence.status;
    client.user.setPresence({
        activity: {
            name: name,
            type: type
        },
        status: status
    })
    .then(console.log(`[${time}] - status ${type} ${name} as ${status}.`))
    .catch(console.error);
});


//run on message
client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) message.content = "-chat " + message.content;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

//if message is not a command, stop
    if (command === undefined) return;

//check if message is guildOnly
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

//check if enough arguments
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
		return message.channel.send(reply);
	}

//apply cooldown, default 1 sec
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 0) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
	timestamps.set(message.author.id, now);
    let time = new Date().getTime();
    time = new Date(time).toLocaleTimeString();
    console.log(`[${time}] - ${message.author.tag} ran ${message.content}`);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

});

//on join
client.on("guildMemberAdd", async member => {
    let time = new Date().getTime();
    time = new Date(time).toLocaleTimeString();
    console.log(`[${time}] - ${member.user.tag} joined the community`);
    let welcomechannel = member.guild.channels.cache.find(channel => channel.name.endsWith("joins_and_leaves"));
    const joinembed = new Discord.MessageEmbed()
			.setColor('#88ff88')
			.setTitle('A new member has entered the library.')
			.setThumbnail(member.user.displayAvatarURL())
			.addField('User Tag', member.user.tag)
			.addField('User ID ', member.user.id)
			.addField('Mention', member, true)
		welcomechannel.send(joinembed);
});



//on leave
client.on("guildMemberRemove", async member => {
    let time = new Date().getTime();
    time = new Date(time).toLocaleTimeString();
    console.log(`[${time}] - ${member.user.tag} left the community`);
    let welcomechannel = member.guild.channels.cache.find(channel => channel.name.endsWith("joins_and_leaves"));
    const leaveembed = new Discord.MessageEmbed()
			.setColor('#ff8888')
			.setTitle('An old member has left the library.')
			.setThumbnail(member.user.displayAvatarURL())
			.addField('User Tag', member.user.tag)
			.addField('User ID ', member.user.id)
			.addField('Mention', member, true)
		welcomechannel.send(leaveembed);
});



client.login(token);
