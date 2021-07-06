const Discord = require('discord.js');

module.exports = {
	name: 'about',
	aliases: [''],
	description: 'Get information about the bot and the server it is in.',
	args: false,
	usage: '',
	guildOnly: true,
	cooldown: 60,
	execute(client, message, args) {
		const embed = new Discord.MessageEmbed()
			.setColor('#FADD34')
			.setTitle('About Info')
			.setThumbnail(client.user.displayAvatarURL())
			.addField('Bot Info', `
**Name:** ${client.user.username}
**Version:** 2021.07.04
**Description:** This bot's intended purpose is to play Minecraft from Discord using packets.
**Languages:** JavaScript with node.js, discord.js, and mineflayer.js
**Developer:** lela_null#1337
**Created:** ${client.user.createdAt.toDateString()}
`)


			embed.addField("\u200B", "\u200B")
			.addField('Server Info', `
**Guild Name: ** ${message.guild.name}
**Total Members: ** ${message.guild.memberCount}
**Created At: ** ${message.guild.createdAt.toDateString()}
**You Joined: ** ${message.member.joinedAt.toDateString()}
`)

		message.channel.send(embed);
	},
};
