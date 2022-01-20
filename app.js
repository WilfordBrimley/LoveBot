/**
 * ───────────────────────────────────────────────────────────────── @nugbot ───────
 * @description: A random ass discord bot.
 * @license WTFPL
 * @author Aphid #7498
 */

/**───────────────────────────────────────────────────────────────── @DECLARE ───────*/
const { Client, Intents } = require('discord.js'),
      client = new Client({                       // This is ugly af
        intents: [
          Intents.FLAGS.GUILDS, 
          Intents.FLAGS.GUILD_MEMBERS, 
          Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
          Intents.FLAGS.GUILD_MESSAGES,
          Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
          Intents.FLAGS.GUILD_MESSAGE_TYPING
        ]
      }),
      fs = require(`fs`);                          // Filesystem
client.config = require(`./config.json`);          // Join the config to the client
client.tree = require('treeify');                  // Display Objects as pretty trees
/**───────────────────────────────────────────────────────────────── @LOAD_SERVICES ─*/
require(`./services/EventLoader`)(client, fs);     // All events sent from discord
require(`./services/CommandLoader`)(client, fs);   // Handle all commands from users

/**───────────────────────────────────────────────────────────────── @MAIN ──────────*/
(async () => {
  await client.login(client.config.token)          // Login our client
    .then(console.log(`Login token sent.`))
    .catch(err => console.log(err))                // Catch any login errors
})();
/**───────────────────────────────────────────────────────────────── @HANDLE_ERRORS ─*/
process.on((`unhandledRejection` || `error`), (err) => {
  console.error(`Uncaught Error: \n` + err.stack); // Catch any unhandled errors
});