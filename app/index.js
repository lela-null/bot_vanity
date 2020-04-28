//version 2019.12.01

//CONST
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./mods').filter(file => file.endsWith('.js'));

//install memory setActivity
let setActivity;
try {
    setActivity = JSON.parse(fs.readFileSync("./memory/setActivity.json", "utf8"));
} catch(_) {
    setActivity = {
        game: "Hello World",
        type: "PLAYING"
    };
    var data = JSON.stringify(setActivity, null, 4);
    var path = "./memory/setActivity.json";
    fs.writeFile(path, data, "utf8", (err) => {
        if(err) console.log(err);
    });
    console.log("Created setActivity.json in /memory/ folder.");
};

//load the mods
console.log("Loading mods...");
for (const file of commandFiles) {
	const command = require(`./mods/${file}`);
	client.commands.set(command.name, command);
	console.log(`    ${command.name}`);
}

//make a coodown collection
const cooldowns = new Discord.Collection();

client.once('ready', () => {
    client.fetchApplication()
        .then(application => console.log(`\nObtained application with name: ${application.name}, owned by ${application.owner.username}.`))
        .catch(console.error);
        setActivity = JSON.parse(fs.readFileSync("./memory/setActivity.json", "utf8"));
        var game = setActivity.game;
        var type = setActivity.type;
        client.user.setActivity(game, {type: type});
});


//run on message
client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) {
        message.content = `-chat ${message.content}`;
    };
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

//if message is not a command, stop
	if (!command) return;

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
	const cooldownAmount = (command.cooldown || 1) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);


	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

});

//on leave
client.on("guildMemberRemove", async member => {
    let tTime = new Date().getTime();
    tTime = new Date(tTime).toLocaleTimeString();
    let welcomechannel = member.guild.channels.find(c => c.name.endsWith("joins_and_leaves"));
    welcomechannel.send(`:x: [${tTime}] ${member.user.tag} has left the community.`);
});



//on join
client.on("guildMemberAdd", async member => {
    let tTime = new Date().getTime();
    tTime = new Date(tTime).toLocaleTimeString();
    let welcomechannel = member.guild.channels.find(c => c.name.endsWith("joins_and_leaves"));
    welcomechannel.send(`:o: [${tTime}] ${member.user.tag} has joined the community.`);
});

client.login(token);
