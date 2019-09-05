const fs = require("fs");
const yargs = require("yargs");

// console.log("Process:", process.argv);
// console.log("Yargs:", yargs.argv);

// //process.argv Method
var title = process.argv[4];
var body = process.argv[6];
console.log("Process Title:", title);
console.log("Process Body:", body);

// //process.argv Method
var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];
console.log("Yargs Title:", title);
console.log("Yargs Body:", body);

// checkpoint notes [{"title":"react","body":"learn react"},{"title":"medium","body":"read medium"}]

// emprovements to implement:
// 1) make title a required field
// 2) make the add accept only notes with titles that doesnt already exist in notes.txt
