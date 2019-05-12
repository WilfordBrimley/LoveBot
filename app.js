/**
 * ───────────────────────────────────────────────────────────────── @LOVEBOT ───────
 * @description: This is my LoveBot baby. Simple and full of tricks.
 * @license WTFPL
 * @author Lovecraft #4690
 */
/**───────────────────────────────────────────────────────────────── @DECLARE ───────*/
const client = new(require(`discord.js`)).Client(),// One line and a skinned cat
      fs = require(`fs`);                          // Filesystem
client.config = require(`./config.json`);          // Join the config to the client
client.tree = require('treeify');                  // Display Objects as pretty trees
/**───────────────────────────────────────────────────────────────── @LOAD_SERVICES ─*/
require(`./services/EventLoader`)(client, fs);    // All events sent from discord
require(`./services/CommandLoader`)(client, fs);  // Handle all commands from users
/**───────────────────────────────────────────────────────────────── @MAIN ──────────*/
(async () => {
await client.login(client.config.token)           // Login our client
  .then(console.log(`Login token sent.`))         
  .catch(err => console.log(err))                 // Catch any login errors
})();
/**───────────────────────────────────────────────────────────────── @HANDLE_ERRORS ─*/
process.on((`unhandledRejection` || `error`), (err) => { 
  console.error(`Uncaught Error: \n` + err.stack);// Catch any unhandled errors
});

