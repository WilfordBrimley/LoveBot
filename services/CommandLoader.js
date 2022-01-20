module.exports = async (client, fs) => {

  client.commands = new (require(`discord.js`)).Collection();
  client.aliases = new (require(`discord.js`)).Collection();
  // Loads all commands by filename
  fs.readdir(`./commands`, async (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
      let props = require(`../commands/${f}`);
      client.commands.set(props.conf.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.conf.name);
      });
    });
    console.log((`Loaded a total of ${files.length} command(s).`));
  })
  
};