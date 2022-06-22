function log(content) {
    console.log(content);
}

const solveHint = require('./functions/solveHint.js');
const hint = require('./functions/hint.js');

module.exports.catcher = {solveHint, hint}