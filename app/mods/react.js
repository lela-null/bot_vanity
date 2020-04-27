module.exports = {
	name: 'react',
	cooldown: 5,
	async execute(client, message, args) {
		message.react('😄');

		try {
			await message.react('🍎');
			await message.react('🍊');
			await message.react('🍇');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	},
};

/*
//catching reactions on lod messages
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL'] });
client.on('messageReactionAdd', async (reaction, user) => {
	// When we receive a reaction we check if the message is partial or not
	if (reaction.message.partial) {
		// If the message was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.message.fetch();
		} catch (error) {
			console.log('Something went wrong when fetching the message: ', error);
		}
	}
	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
});

*/
