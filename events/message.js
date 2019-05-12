module.exports = async (client, message) => {
  let config = client.config;
  client.elevation = async (message) => {
    permlvl = 1;
    if (message.author.id === config.Dev) permlvl = 5;
    return permlvl;
  };
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  let command = args.shift().toLowerCase(),
    perms = client.elevation(message),
    cmd;
  if (message.channel.type == `dm`) console.log(`DM of: ${message.content}`); // Catches DM content.
  if (message.content.indexOf(config.prefix) !== 0) return;
  if (message.author.bot) return; //Just incase shared.
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (await perms < cmd.conf.permLevel) return console.log(`Perm level is too low`);
    if (!cmd.conf.enabled) return console.log(`Command Disabled`);
    cmd.run(client, message, args, perms);
  }
  /**───────────────────────────────────────────────────────────────── @COMMAND_HELP ─────*/
  if (command === `hxlp` || command === `halp` || command === `info` || command === `commands`) {
    message.channel.send({
      embed: {
        title: `Commands available:`,
        description: `
                      **join or invite** - Get the OAuth2 link to add the bot to one of your servers.
                      **say** (something) - Repeats after you.
                      These commands also work via DM.
                      Created by: Lovecraft#4690
                      Help always welcome: <https://gitlab.com/Lovecraft_>`
      }
    }).then(async msg => {
      //if (message.channel.type !== `dm`) msg.delete(50000);
    }).catch(e => client.log.error(e));
  };
};