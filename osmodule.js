const os = require('os');
const { compileFunction } = require('vm');
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.type());