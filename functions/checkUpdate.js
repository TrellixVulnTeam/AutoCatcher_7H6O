const colors = require('colors');
const axios = require('axios');
const version = require('../package.json')

async function checkUpdate() {
  const res_ = await axios
    .get(`https://registry.npmjs.com/${encodeURIComponent('autocatcher')}`).then(async e =>{
      
      if(version.dependencies.autocatcher === e.data[`dist-tags`].latest) {
        console.log(colors.green(`[NOTIF] Module is upto date`))
      } else {
        console.log(colors.red(`[ERROR] Module is not upto date!`) +colors.red(`${version.dependencies.autocatcher}`)+ `-->` +colors.green(`${e.data[`dist-tags`].latest}`))
      }
    })
    .catch((err) => { console.log(err)});
}

module.exports = checkUpdate;