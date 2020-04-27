module.exports = {
	name: 'chat',
	description: 'Custom chat feature',
	guildOnly: false,
	execute(client, message, args) {
        let executableChannels = ["516894709663399937", "499419055967436801"];
        if(!executableChannels.includes(message.channel.id)) return;

		let input = {

		}

		let output = {

		}

		let badWords = ["fuck", "fucker", "fucking", "bitch", "cunt", "dick", "nigger", "nigga", "spick", "chink", "zazi", "bigot", "shit", "bastard", "asshole", "douchbag", "pussy", "piss", ];

		let badTopic = ["cock", "blowjob", "vore", "rape", "bdsm", "pedo", "hentai", "drugs", "drugie", "cuck", "pedophile", "murder", "scat", "masturbate", "clit", ]

		let badBully = ["boomer", "jew", "gay", "whore", "twink", "dike", "faggot", "midget", ]

		let badFeels = ["suicide", "suicidal", ]


		message.channel.send('Pass.');
	},
};
