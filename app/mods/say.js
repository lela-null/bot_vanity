module.exports = {
	name: 'say',
	cooldown: 5,
    args: false,
    execute(client, message, args) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return;
        message.delete().catch(O_o=>{});
        args = args.join(" ");
        message.channel.send(args);
        return;
	},
};
