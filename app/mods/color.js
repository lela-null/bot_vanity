const Discord = require('discord.js');

module.exports = {
    name: `color`,
	aliases: ['hex'],
	description: ``,
	args: true,
	usage: `[hex]`,
	guildOnly: false,
	cooldown: 1,
	async execute(client, message, args) {
        message.channel.send(`https://www.colorhexa.com/${args}`)
    }
};
