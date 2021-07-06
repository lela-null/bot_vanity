module.exports = {
	name: `chat`,
	aliases: [''],
	description: `Custom chat feature.`,
	args: false,
	usage: ``,
	guildOnly: true,
	cooldown: 0,
	execute(client, message, args) {
		//ignore the bot
		if(message.author.bot) return;
		//load config
		const config = require("../config.json");
		//lomit channels
        let executableChannels = ["860387552061816835", "499419055967436801"];
        if(!executableChannels.includes(message.channel.id)) return;

		let badWords = ["fuck", "fucker", "fucking", "bitch", "cunt", "dick", "nigger", "spick", "chink", "zazi", "bigot", "shit", "bastard", "asshole", "douchbag", "pussy", "piss", ];
		let badTopic = ["cock", "blowjob", "vore", "rape", "bdsm", "pedo", "hentai", "drugs", "drugie", "cuck", "pedophile", "murder", "scat", "masturbate", "clit", ]
		let badBully = ["boomer", "whore", "twink", "dike", "faggot", "midget", ]
		let badFeels = ["suicide", "suicidal", ]

		//join the words into a sentence
		let script = args.join(" ");
		let responseArray = [];
		let cLog = null;

		//check if bot was tagged by non owner
		if(script.indexOf(`<@${config.botID}>`) >= 0) {
			if(message.author.id === config.ownerID) return;
			console.log("bot tagged");
			responseArray = [
				`No need to tag me.`
			]
			cLog = `${message.author.username} tagged the bot.`;
		};

		//remove all special characters and double spaces
		script = script.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();

		//catch 'invite' anywhere in statement
		if(script.indexOf("invite") >= 0) {
			cLog = `${message.author.username} triggered invite.`;
			responseArray = [
				`Invite your friends here: https://discord.gg/E4cKg3NXQR`
			];
		};
		//catch 'invite' anywhere in statement
		if(script.indexOf("minecraft") >= 0) {
			cLog = `${message.author.username} triggered minecraft.`;
			responseArray = [
				`I wish I could play.`,
				`That's my favorite game!`,
				`I used to have an AI to play.`
			];
		};
		//catch 'black' anywhere in statement
		if (script.indexOf("black") >= 0) {
			cLog = `${message.author.username} triggered black.`;
			responseArray = [
				`Like the crayon type of black?`
			];
		};
		//if first word is hello or hi
		if (script.startsWith("hi") || script.startsWith("hello")) {
			cLog = `${message.author.username} triggered hello.`;
			responseArray = [
				`Howdy.`,
				`Hey there.`,
				`'Sup dude.`,
				`Hello.`,
				`Hi back.`,
				`Greetings`
			];
		};
		//if the only message is test
		if (script == "test") {
			cLog = `${message.author.username} triggered test.`;
			responseArray = [
				`Your test didn't fail.`,
				`Pass.`
			];
		};
		//if the only message is ping
		if (script == "ping") {
			cLog = `${message.author.username} triggered ping.`;
			responseArray = [
				`I refuse to say it...`,
				`I refuse to say it...`,
				`P-pong O///O`
			];
		};
		//if the only message is nigga
		if (script.indexOf("nigga") >= 0) {
			cLog = `${message.author.username} triggered nigga.`;
			responseArray = [
				`Do you have a pass for that?`
			];
		};
		//if the only message is i love you
		if (script === "i love you") {
			cLog = `${message.author.username} triggered love.`;
			console.log(message.author.id);
			if(message.author.id === config.ownerID) {
				responseArray = [
					`I love you too.`
				];
			} else {
				responseArray = [
					`Understood.`,
					`I konw.`,
					`Thanks.`,
					`I'm sorry`,
					`Who doesn't.`,
					`I can't love you back, I'm a bot.`
				];
			};
		};

		//check for bad words
		for (i = 0; i < badWords.length; i++) {
			if (script.indexOf(badWords[i]) >= 0) {
				cLog = `${message.author.username} said ${badWords[i]}`;
				responseArray = [
					`Cussing is a bad habbit, ${message.author}`,
					`Don't say ${badWords[i]}, ${message.author}`,
					`Such a potty mouth, ${message.author}`,
					`Watch your mouth, ${message.author}`,
					`That's a bad word you got there, ${message.author}.`,
					`Are you trying to make me mad, ${message.author}?`,
					`Please calm down, ${message.author}.`,
					`Why the small vocabulary, ${message.author}?`,
					`Think of something original, ${message.author}.`,
					`Only teens use words like that, ${message.author}.`
				];
				if (script.indexOf("nigger") >= 0) {
					responseArray = [
						`That word is bannable, ${message.author}`
					];
				};
			};
		};
		if(responseArray.length == 0) return;
		choose = Math.floor(Math.random() * responseArray.length);
		message.channel.send(responseArray[choose])

	}
}
