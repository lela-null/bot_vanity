module.exports = {
	name: 'emoji',
	cooldown: 5,
	execute(client, message, args) {
		message.channel.send('Unicode emoji = :smile:');
	},
};
