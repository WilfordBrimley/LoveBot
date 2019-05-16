module.exports = async (client, fs) => {
  client.elevation = async (message) => { // set our permission levels
    permlvl = 1; // default permlvl of 1
    if (message.author.id === client.config.Dev) permlvl = 5; // if we're the dev, godmode
    if (message.member.highestRole.comparePositionTo(message.guild.roles.find("name", `Insured`)) >= 0) permlvl = 2;
    return permlvl;
  };
};