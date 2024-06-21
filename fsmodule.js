const fs = require('fs');

// fs.readFile('file1.txt', 'utf-8', (err, data)=>{
//   console.log(err, data);
// })

// const a = fs.readFileSync('file1.txt')
// console.log(a);
// console.log(a.toString());

fs.writeFile('file1.txt', "this is great",()=>{
  console.log("Writter to the file")
});

console.log("Finished reading file");