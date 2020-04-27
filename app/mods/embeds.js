const Discord = require('discord.js');

module.exports = {
	name: 'embeds',
	cooldown: 300,
	execute(client, message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org/')
			.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
			.setDescription('Some description here')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addField('Regular field title', 'Some value here')
			.addBlankField()
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/wSTFkRM.png')
			.setTimestamp()
			.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		message.channel.send(exampleEmbed);


		const exampleEmbed1 = new Discord.MessageEmbed()
			.setTitle('Some title')
			.attachFiles(['assets/0_bot.png'])
			.setImage('attachment://0_bot.png');

		message.channel.send(exampleEmbed1);

	},
};
