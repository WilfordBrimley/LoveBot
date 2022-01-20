exports.run = (client, message, params) => {
  
  message.channel.sendEmbed('')
    .catch(e => client.emit(`error`, e));
    
};

exports.conf = {
  name: `test`,
  aliases: [`test`],
  permLevel: 0,
  enabled: false,
  guildOnly: false
};