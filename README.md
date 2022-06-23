# AutoCatcher
[![](https://img.shields.io/npm/v/discord.js.svg)](https://www.npmjs.com/package/autocatcher)


AutoCatcher is a node module developed for automating [Pokétwo](https://poketwo.net/).
## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm i autocatcher
```

## Usage

```javascript
const hint = require('autocatcher');
const solveHint = require('autocatcher');

var spawned_embed = ``; //Discord Message content
console.log(hint(spawned_embed )); //returns true/false

//Solving hint
var new_hint = ``;
console.log(solveHint(new_hint)) //returns pokemon name if recognized
```
## Checklist

- [x] Hint Solver
- [x] Spawn detector
- [ ] Spawn Notifier[Webhook]
- [ ] Auto-Shiny Hunter
- [ ] Auto-Incense-r
- [ ] Market Nuker
- [ ] Market Sniper
- [ ] Auction Sniper
- [ ] Auction Notifier
- [ ] AutoVoter [Top.gg]
- [ ] AutoVerify
- [x] Event Update
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
