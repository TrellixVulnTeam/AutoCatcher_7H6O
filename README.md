# AutoCatcher
[![](https://img.shields.io/npm/v/discord.js.svg)](https://www.npmjs.com/package/autocatcher)

AutoCatcher is a node module developed for automating [Pokétwo](https://poketwo.net/).
## **Note from Dev**
> The project may not be updated for the coming few days as for preperation of next update on Pokémon prediction. This doesn't means that it won't be updated if any event is live
## Installation

Use the package manager [npm](https://www.npmjs.com/package/autocatcher) to install module.

```bash
npm i autocatcher
```

## Usage

```javascript
const { hint, solveHint, shinyHunt } = require('autocatcher');

//Checking if pokemon is spawned
var spawned_embed = ``; //Discord Message content
console.log(hint(spawned_embed )); //returns true/false

//Solving hint
var new_hint = ``;
console.log(solveHint(new_hint)) //returns pokemon name if recognized

//Shiny Hunting Specific Pokemon...
var pokemon = `Charmander`, token = `token`;
var servers_allowed: ["922465517833420812", "Server_2"] //Servers where it should catch
var config = {limit: 75, allowedGuilds: servers_allowed} //Limit: Number at which it should stop catching.
shinyHunt(token, pokemon, config) // Returns null. Token, if valid, would be online and catching.
```
## Checklist

- [x] Hint Solver
- [x] Spawn detector
- [ ] Spawn Notifier[Webhook]
- [x] Auto-Shiny Hunter
- [ ] Auto-Incense-r
- [ ] Market Nuker
- [ ] Market Sniper
- [ ] Auction Sniper
- [ ] Auction Notifier
- [ ] AutoVoter [Top.gg]
- [ ] AutoVerify
- [x] Event Update [Last Update: 05/31/2022]
 
## Links
- [discord.js-selfbot-v13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13)
- [NPM](https://www.npmjs.com/package/autocatcher)
- [SubReddit](https://www.reddit.com/r/PokeBots/)
- [Discord Server](https://discord.gg/bzB4KWg8Z9)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
