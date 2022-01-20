module.exports = async (client) => {
  
  let TimeStamp = (new Date().toISOString().replace(/.+T/, `[`).replace(/\..+/, `]`));
  console.log(`Disconnected, reconnect failed. Attempting to restart client. `);
  client.destroy();
  client.login(client.config.token)
    .catch(err => console.log(err));
  console.log(`${TimeStamp} client has Connected On ` + await client.guilds.size + ` Servers!`);

};