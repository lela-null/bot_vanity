module.exports = {
	name: 'no_command',
	aliases: [''],
	description: 'A command listener.',
	args: true,
	usage: '',
	guildOnly: false,
	cooldown: 0.001,
	async execute(client, message, args) {
        return;
    }
}
