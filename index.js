const checkUpdate = require('./functions/checkUpdate.js')
const solveHint = require('./functions/solveHint.js');
const hint = require('./functions/hint.js');

checkUpdate()
const ready = {checkUpdate}
const client = {solveHint, hint, ready}

module.exports = client;