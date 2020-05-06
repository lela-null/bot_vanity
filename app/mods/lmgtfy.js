module.exports = {
	name: `lmgtfy`,
	aliases: ['?'],
	description: ``,
	args: true,
	usage: `[question]`,
	guildOnly: false,
	cooldown: 10,
    execute(client, message, args) {
        if(!args.slice(0)) return;
        args = args.join("+");
        let link = "https://lmgtfy.com/?q=" + args;
        message.channel.send(link);
        return;
	},
};
