const checkUpdate = require('./functions/checkUpdate.js')
checkUpdate()
const solveHint = require('./functions/solveHint.js');
const hint = require('./functions/hint.js');
const shinyHunt = require('./functions/shinyHunt.js')
const ready = {checkUpdate}
const client = {solveHint, hint, shinyHunt, ready }

module.exports = client;