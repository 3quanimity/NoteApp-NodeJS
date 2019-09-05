// console.log("Starting app.js");

const yargs = require("yargs");
const notes = require("./notes");
const argv = yargs.argv;

// uncomment the block below and comment the one under it to switch from yargs to process
// var title = process.argv[4];
// var body = process.argv[6];
// var command = process.argv[2];

// comment the block below and uncomment the one above it to switch from yargs to process
var title = argv.title;
var body = argv.body;
var command = argv._[0];

switch (command) {
  case "add": {
    notes.addingNote(title, body);
    break;
  }
  case "remove": {
    notes.removeNote(title);
    break;
  }
  case "list": {
    notes.listNotes();
    break;
  }
  case "read": {
    notes.readNote(title);
    break;
  }
  default: {
    console.log("Unkown Command, Breath!");
    break;
  }
}
