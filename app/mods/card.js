const Discord = require('discord.js');

module.exports = {
	name: 'card',
	aliases: [''],
	description: '',
	args: false,
	usage: '',
	guildOnly: false,
	cooldown: 60,
	async execute(client, message, args) {
        message.channel.send("Here is your library card.")
        const cardembed = new Discord.MessageEmbed()
        .setColor('#7289DA')
        .setTitle('LIBRARY CARD')
        .setThumbnail(message.author.displayAvatarURL())
        .addField('Member Name', message.author.username)
        .addField('ID Number', message.author.id)
        .addField('Member Since', message.member.joinedAt.toDateString())
        return message.channel.send(cardembed);
    }
}
