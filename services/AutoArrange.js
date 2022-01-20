module.exports = async (client) => {

  let sorting = [];
  if (!client) return;
  client.guilds.fetch(`817485903864791040`)
    .then( guild => {
      guild.channels.fetch()
        .then( channels => {
          channels.forEach( channel => {
            if(channel.id == `910310062076071936`) {
              channel.children.forEach( childChannel => {
                childChannel.messages.fetch()
                  .then( messages => {
                    messages.forEach( message => {
                      if (message.attachments) {
                        message.attachments.forEach( attachment => {
                          sorting.push(message)
                          console.log(`${attachment.url} created: ${message.createdAt}`)
                        })
                      }
                    })
                  })
              })
            }
          });
        })
    })
    .catch(err => console.error(err));
    
};