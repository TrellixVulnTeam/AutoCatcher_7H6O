const Discord = require('discord.js-selfbot-v13')

async function hint(message) {
    const poketwoId = "716390085896962058";
    var err = `Invalid message format`
    if(!(message instanceof Discord.Message)) {
    throw new Error(`Invalid message recieved`);
    } else {
        if(message.author.id === poketwoId) {
            message.embeds.forEach(async e => {
                if(e.title.includes(`pokémon has appeared`)) {
                    return true;
                } else {
                    return false
                }
            })
        }
    }
}

module.exports = hint;