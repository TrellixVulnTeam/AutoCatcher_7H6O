
async function hint(message) {
    const poketwoId = "716390085896962058";
    var err = `Invalid message format`
    if(!message) {
    throw new Error(`err`);
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