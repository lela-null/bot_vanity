module.exports = {
	name: `say`,
	aliases: [``],
	description: `The bot will repeat what you say.`,
	args: true,
	usage: `[text]`,
	guildOnly: true,
	cooldown: 0.001,
    execute(client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return;
        message.delete().catch(O_o=>{});
        args = args.join(" ");
        message.channel.send(args);
        return;
	},
};
