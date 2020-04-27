module.exports = {
	name: 'avatar',
	aliases: ['icon', 'pfp'],
	description: 'Get a link to a list of user\'s avatars',
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
