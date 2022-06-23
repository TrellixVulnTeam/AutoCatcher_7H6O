const checkUpdate = require('./functions/checkUpdate.js')
checkUpdate()
const solveHint = require('./functions/solveHint.js');
const hint = require('./functions/hint.js');

const ready = {checkUpdate}
const client = {solveHint, hint, ready}

module.exports = client;