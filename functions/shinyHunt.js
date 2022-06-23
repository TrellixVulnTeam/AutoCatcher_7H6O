var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const colors = require('colors')
var pokemons = require('../data/pokemon.json')
var { Client } = require('discord.js-selfbot-v13');
var hint = require('./hint.js');
var solveHint = require('./solveHint.js')

const client = new Client();

async function shinyHunt(token, pokemon, {limit, allowedGuilds}) {
    var under_limit = true;
    checkToken(token).then(async result => {
    if(result === true) {
        if(!pokemon || !pokemons.includes(pokemon)) {
            throw new Error(`Passed Pokemon not found!`)
        } else {
            client.login(token)
            client.on('ready', async () => console.log(`${client.user.username} is ready`))
            client.on("messageCreate", async message => {
                if(under_limit === false) {
                    return; 
                } else {
                    if(allowedGuilds) {
                        if(allowedGuilds.includes(message.guild.id)) {
                            hint(message)
                            var res = solveHint(message)
                            if(res[1]) {
                                var i = 0
                                res.forEach(async n => {
                                    if(!i === 0) return;
                                    if(n.toLowerCase() === pokemon.toLowerCase()) {
                                        message.channel.send(`<@716390085896962058> c ${pokemon}`).then(async msg => {
                                            var filter = m =>{ m.content.includes('Congratulations') && m.content.includes(`Shiny chain!`)};
                                            var collector = msg.channel.createMessageCollector({filter, time: 2000})
                                            collector.on('collect', async m => {
                                                if(!i === 0) {
                                                   return;
                                                } else {
                                                    if(m.mentions.users.first().id === client.user.id) {
                                                        i++;
                                                        console.log(colors.yellow(`Shiny Hunt Pokemon Caught! +1`))
                                                        var streak = parseInt(ar.split(" ")[10].replace("(", ``).replace(")", ``))
                                                        if(limit) {
                                                            if(limit <= streak) under_limit = false;
                                                        }
                                                        if(limit <= streak) under_limit = false;
                                                    } else {
                                                        return;
                                                    }
                                                   }
                                            })
                                        })
                                    }
                                })
                            }
                        } else {
                            return;
                        }
                    }

                }
            })
        }
    } else {
        
        throw new Error(result);
    }
})
}

async function checkToken(token) {
    var req = new XMLHttpRequest();
    req.open("GET", "https://discord.com/api/v9/users/@me/library", false);
    req.setRequestHeader("Authorization", token);
    req.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.41 Safari/537.36");
    req.send(null);

    var status_code = req.status;
    if (status_code === 401) {
        return "Invalid token has been passed! Please check the credentials again!";
    }
    else if (status_code == 200) {
        console.log(`Token is validated!`)
        return true;
    }
    else if (status_code == 403) {
        return "The account has been suspended by Discord!";
    }
    else {
        return "Unknown error occcured";
    }

}
module.exports = shinyHunt;