module.exports = {
	name: 'args-info',
	description: 'Get info about arguments.',
	args: true,
	usage: '<agruments>',
	execute(client, message, args) {
        if (args[0] === 'foo') {
    		return message.channel.send('bar');
    	}
    	message.channel.send(`First argument: ${args[0]}`);
	},
};
