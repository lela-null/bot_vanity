module.exports = {
	name: `time`,
	aliases: [``],
	description: `Check the server's time.`,
	args: false,
	usage: ``,
	guildOnly: false,
	cooldown: 1,
    execute(client, message, args) {
        let tTime = new Date().getTime();
        tTime = new Date(tTime).toLocaleTimeString();
        message.channel.send(`The current time, where I am, is \`${tTime}\`.`);
        return;
	},
};
