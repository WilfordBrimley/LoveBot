module.exports = async (client) => {

  let TimeStamp = (new Date().toISOString().replace(/.+T/, `[`).replace(/\..+/, `]`));
  console.log(`Disconnected, reconnecting...`);
  console.log(`${TimeStamp} client has Connected On ${await client.guilds.size} Servers!`);
  
};