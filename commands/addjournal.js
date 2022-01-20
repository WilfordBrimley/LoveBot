exports.run = (client, message, params) => {
  //Not complete
  const fs = require('fs');
  let data = fs.readFileSync('./services/journalUsers.json'),
      journal = JSON.parse(data);

};

exports.conf = {
  name: `addjournal`,
  aliases: [`d`],
  permLevel: 5,
  enabled: false,
  guildOnly: false
};