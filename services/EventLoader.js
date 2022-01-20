module.exports = async function(client, fs)  {

  fs.readdir(`./events`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      let event = require(`../events/${file}`);
      let eventName = file.split(`.`)[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  // Just some easy event stuff we don`t need separate files for
  client.on(`messageCreate`, async (message) => console.log(message.content));
  client.on(`rateLimit`, (rateLimit) => console.log(rateLimit));
  client.on(`error`, (error) => console.log(error));
  client.on(`guildCreate`, (guild) => console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`))
  client.on(`guildDelete`, (guild) => console.log(`Guild Kicked: ${guild.name} (id: ${guild.id}). This guild had ${guild.memberCount} members!`))

};