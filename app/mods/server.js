module.exports = {
	name: 'server',
	description: 'Get server info.',
	execute(client, message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
