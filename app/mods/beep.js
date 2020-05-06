module.exports = {
	name: `beep`,
	aliases: [''],
	description: ``,
	args: false,
	usage: ``,
	guildOnly: false,
	cooldown: 1,
	execute(client, message, args) {
		message.channel.send('Boop.');
	},
};
