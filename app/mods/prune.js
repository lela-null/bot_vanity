module.exports = {
	name: `prune`,
	aliases: [`delete`],
	description: `Delete a number of messages.`,
	args: true,
	usage: `[number]`,
	guildOnly: true,
	cooldown: 10,
	execute(client, message, args) {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    	const amount = parseInt(args[0]) + 1;
		if (amount <= 1 || amount > 100) {
             return message.reply('you need to input a number between 1 and 99.');
        }
        message.channel.bulkDelete(amount, true).catch(err => {
        	console.error(err);
        	message.channel.send('there was an error trying to prune messages in this channel!');
        });
	},
};
