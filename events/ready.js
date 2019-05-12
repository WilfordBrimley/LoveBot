module.exports = async (client) => {
  let TimeStamp = (new Date().toISOString().replace(/.+T/, `[`).replace(/\..+/, `]`));
  console.log((`LoveBot has Connected In ${await client.guilds.size} guilds. ${TimeStamp}`));
  console.log(client.tree.asTree(client.user, true, true));
};