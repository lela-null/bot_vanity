module.exports = {
	name: `avatar`,
	aliases: ['pfp', 'icon'],
	description: `Get a link to a user\'s profile picture.`,
	args: false,
	usage: `\`[name]\` OR \`[name], [name], ect...\``,
	guildOnly: false,
	cooldown: 10,
	execute(client, message, args) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL()}>`);
        }
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL()}>`;
        });
        message.channel.send(avatarList);
	},
};
