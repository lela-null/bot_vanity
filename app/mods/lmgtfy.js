module.exports = {
	name: 'lmgtfy',
	cooldown: 10,
    args: false,
    execute(client, message, args) {
        if(!args.slice(0)) return;
        args = args.join("+");
        let link = "https://lmgtfy.com/?q=" + args;
        message.channel.send(link);
        return;
	},
};
