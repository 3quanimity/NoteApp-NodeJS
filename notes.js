const fs = require("fs");

// a func that returns an array of data from notes.txt file,
// if file doesnt exist or empty it creates an empty array
const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (error) {
    return [];
  }
};

// a func that creates an obj "note", push it into the array from "fetchNotes"
// which will be then written (over any existing data) in a notes.txt file
// (file will be created if it doesnt exist)
const addingNote = (title, body) => {
  //   reading from text.txt file (if possible)
  var notes = fetchNotes();

  //   creation
  var note = {
    title, //title: title
    body //body: body
  };
  notes.push(note);
  fs.writeFileSync("notes.txt", JSON.stringify(notes));

  //   rendering
  console.log("Note created");
  console.log("--");
  console.log("Title:", note.title);
  console.log("Body:", note.body);
  console.log("--");
};

const removeNote = title => {
  var notes = fetchNotes();

  notes = notes.filter(note => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(notes));

  console.log("Note removed");
};

const readNote = title => {
  var notes = fetchNotes();

  notes = notes.filter(note => note.title === title);

  console.log("Note Found");
  console.log("--");
  console.log("Title:", notes[0].title);
  console.log("Body:", notes[0].body);
  console.log("--");
};

const listNotes = () => {
  var notes = fetchNotes();

  console.log(`Printing ${notes.length} note(s)`);
  notes.map(note => {
    console.log("--");
    console.log("Title:", note.title);
    console.log("Body:", note.body);
  });
  console.log("--");
};

module.exports = { addingNote, removeNote, readNote, listNotes };
