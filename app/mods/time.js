module.exports = {
	name: 'time',
	cooldown: 5,
    args: false,
    execute(client, message, args) {
        let tTime = new Date().getTime();
        tTime = new Date(tTime).toLocaleTimeString();
        message.channel.send(`The current time, where I am, is \`${tTime}\`.`);
        return;
	},
};
