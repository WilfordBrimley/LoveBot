module.exports = async (client, message) => {

  /**───────────────────────────────────────────────────────────────── @TEST_USER ───────*/
  client.elevation = async (message) => { // set our permission levels
    console.log(`here`)
    permlvl = 1; // default permlvl of 1
    if (message.author.id === client.config.Dev) permlvl = 5; // if we're the dev, godmode
    return permlvl;
  };

  /**───────────────────────────────────────────────────────────────── @TEST_PREFIX ───────*/
  let prefix = false;
  for (const thisPrefix of client.config.prefix) { // in json "prefix" : ["!", "-"]
    if (message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  }
  if (!prefix || message.author.bot) return; // if no prefix or is bot return

  /**───────────────────────────────────────────────────────────────── @GET_ARGUMENTS ───────*/
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let command = args.shift().toLowerCase(),
    perms = client.elevation(message),
    cmd;
  if (message.channel.type == `dm`) console.log(`DM of: ${message.content}`); // Catches DM content.

  /**───────────────────────────────────────────────────────────────── @TEST_COMMAND ───────*/
  if (client.commands.has(command)) {
    cmd = client.commands.get(command)
  } else if (client.aliases.has(command)) { // or an alias
    cmd = client.commands.get(client.aliases.get(command))
  };

  /**───────────────────────────────────────────────────────────────── @SECURE_RUN ───────*/
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
                      `
      }
    }).then(async msg => {
      if (msg.channel.type !== `dm`) msg.delete(50000);
    }).catch(e => client.emit(`error`, e));
  };
};