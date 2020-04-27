const Discord = require('discord.js');

module.exports = {
	name: 'about',
	description: 'Get information about the bot.',
	args: false,
	usage: '',
	guildOnly: true,
	execute(client, message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#FADD34')
			.setTitle('About Info')
			.setThumbnail(client.user.displayAvatarURL())
			.addField('Bot Info', `
**Name:** ${client.user.username}
**Version:** 2020.01.01 (Broccoli)
**Description:** This bot's intended purpose is to play Minecraft from Discord using packets.
**Languages:** JavaScript with node.js, discord.js, and mineflayer.js
**Developer:** lela_null#1337
**Created:** ${client.user.createdAt.toDateString()}
`)


			.addBlankField()
			.addField('Server Info', `
**Name:** ${message.guild.name}
**Guild Name: ** ${message.guild.name}
**Total Members: ** ${message.guild.memberCount}
**Created At: ** ${message.guild.createdAt.toDateString()}
**You Joined: ** ${message.member.joinedAt.toDateString()}
`)

		message.channel.send(exampleEmbed);
	},
};
