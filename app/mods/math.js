module.exports = {
	name: `math`,
	aliases: ['='],
	description: `Evaluate a math equation.`,
	args: true,
	usage: `[]`,
	guildOnly: false,
	cooldown: 1,
    execute(client, message, args) {
        //evaluate code
            function clean(text) {
              if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
              else
                  return text;
            }

            try {
              const code = args.join(" ");
              let evaled = eval(code);

              if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

              message.channel.send(clean(evaled), {code:"xl"});
            } catch (err) {
              message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
            return;
	},
};
