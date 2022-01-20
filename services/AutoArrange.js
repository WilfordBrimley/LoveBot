module.exports = async (client) => {
  const journals = require('./journalUsers.json')
  client.on(`messageCreate`, async (message) => {
    journals.data.forEach( async entry => {
      if (message.channel.id == entry.channelID && message.author.id == entry.userID && message.attachments) {
        message.channel.setPosition(0)
      }
    });
  });
};
