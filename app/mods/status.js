const fs = require("fs");
const { ownerId } = require('../config.json');

module.exports = {
	name: 'status',
	description: 'Beep!',
	execute(client, message, args) {
		if(message.member.id != ownerId) return;
        setActivity = JSON.parse(fs.readFileSync("./memory/setActivity.json", "utf8"));
//format text
        message.delete().catch(O_o=>{});
        args = args.join(" ");
        args = args.split(",");
        if (args[1]) args[1] = args[1].replace(/\s/g, '');
        if (args[1]) args[1] = args[1].toUpperCase();
//set game
        let game = args[0];
//set type
        if(!args[1]) {
            args[1] = setActivity.type;
        };
        if(args[1] != "PLAYING" && args[1] != "LISTENING" && args[1] != "WATCHING") {
            message.channel.send("Proper actions are `PLAYING, WATCHING, and LISTENING`.").then(m => m.delete(10000));
            return;
        }
//format data

        let type = args[1].toUpperCase();
        type = type.toUpperCase();
        args[1] = args[1].toLowerCase();

//save to json
        setActivity = {
            game: game,
            type: type
        };
        fs.writeFile("./memory/setActivity.json", JSON.stringify(setActivity, null, 4), (err) => {
            if(err) console.log(err);
        });

//set activity
        client.user.setActivity(game, {type: type});

//send message
        if(type === "LISTENING") type = "listening to";
        message.channel.send(`I am now ${type.toLowerCase()} **${game}**.`);
	},
};
