module.exports = {
	name: 'example',
	aliases: [''],
	description: '',
	args: true,
	usage: '',
	guildOnly: false,
	cooldown: 60,
	async execute(client, message, args) {
		try {
			message.channel.send(" ");
		} catch (error) {
			console.error('Example did not pass, an update may be required.');
		}
    }
}
