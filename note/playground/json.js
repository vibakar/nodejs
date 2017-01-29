const fs=require('fs');

var originalnote={
  title:'cricket',
  body:'cricket was invented by england'
};

var originalstringnote=JSON.stringify(originalnote);
fs.writeFileSync('note.json',originalstringnote);

var notestring=fs.readFileSync('note.json');
var note=JSON.parse(notestring);
console.log(typeof note);
console.log(note.title);
