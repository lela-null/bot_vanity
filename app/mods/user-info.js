module.exports = {
	name: 'user-info',
	description: 'Get info about the user.',
	execute(client, message, args) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
