exports.run = (client, message, params) => {
  // Empty message handler
  if (!params) {
    message.channel.send({
        embed: {
          description: `usage: ${config.prefix}say [words]`
        }
      })
      .catch(e => client.emit.error(e));
    return;
  }
  if (message.channel.type != `dm`) message.delete();
  message.channel.send(params.join(` `))
    .catch(e => client.log.error(e));
};

exports.conf = {
  name: `say`,
  aliases: [`say`],
  permLevel: 0,
  enabled: true,
  guildOnly: false
};