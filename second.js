//function(exports, require, module, _filename, _dirname) nodejs wrap module to this function 
 
// module.exports = {
//   name: "Nishant",
//   fav: 3,
//   Developer: true
// };

Nishant = {
  name: "Nishant",
  fav: 3,
  Developer: true
}
console.log(exports, require, module, __filename, __dirname);
module.exports = Nishant;

