module.exports = async (client) => {
  if (client.isReady()) {
    let TimeStamp = new Date().toISOString().replace(/.+T/, `[`).replace(/\..+/, `]`),
        numGuildsConnected = await client.guilds.cache.size;
    console.log((`nugbot has Connected In ${numGuildsConnected} guild(s). ${TimeStamp}`));
    console.log(client.tree.asTree(client.user, true, true));
  } else {
    console.log(`client is not ready, please check the connection to the API.`);
  };
};