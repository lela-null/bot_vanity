module.exports = {
	name: 'permission',
	description: 'this is a read only file',
    guildOnly: true,
	execute(client, message, args) {
        message.channel.send('This is a private file.');
        return;
		guild.defaultRole.setPermissions(['SEND_MESSAGES', 'VIEW_CHANNEL']);
        //change permissions for a group

        member.roles.has('role-id-here');
        // returns true if the member has the role

        member.roles.some(role => role.name === 'Mod');
        // returns true if any of the member's roles is exactly named "Mod"

        guild.roles.create({ data: { name: 'Mod', permissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS'] } });
        //create a role with setPermissions

        if (member.hasPermission('KICK_MEMBERS')) {
        	console.log('This member can kick');
        }
        if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
        	console.log('This member can kick and ban');
        }
        if (member.hasPermission('KICK_MEMBERS', { checkAdmin: false, checkOwner: false })) {
        	console.log('This member can kick without allowing admin to override');
        }
        //check is a user has permissions

        channel.updateOverwrite(channel.guild.defaultRole, { VIEW_CHANNEL: false });
        //channel override (true, false, null)




        const { Permissions } = require('discord.js');

        const permissions = new Permissions([
        	'MANAGE_CHANNELS',
        	'EMBED_LINKS',
        	'ATTACH_FILES',
        	'READ_MESSAGE_HISTORY',
        	'MANAGE_ROLES',
        ]);

        console.log(permissions.has('KICK_MEMBERS'));
        // output: false

        permissions.add('KICK_MEMBERS');
        console.log(permissions.has('KICK_MEMBERS'));
        // output: true

        permissions.remove('KICK_MEMBERS');
        console.log(permissions.has('KICK_MEMBERS'));
        // output : false

	},
};
