const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');

const titleoptions={
  describe:'Title of note',
  demand:true,
  alias:'t'
};

const bodyoptions={
  describe:'Body of the note',
  demand:true,
  alias:'b'
};

const argv=yargs
.command('add','Add a new Note',{
  title:titleoptions,
  body:bodyoptions
})
.command('list','List all Notes')
.command('read','Read a Note',{
  title:titleoptions
  })
  .command('remove','Remove a Note',{
    title:titleoptions
    })
.help()
.argv;
var command=process.argv[2];

if(command==="add"){
  var note= notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note created');
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }else {
    console.log('Note title taken');
  }
}else if (command==="list") {
  var allnotes=notes.getAll();
  console.log('Printing all ',allnotes.length,' notes');
  console.log('---');
  if(allnotes){
    for(var i=0;i<allnotes.length;i++){
      console.log('Title :',allnotes[i].title);
      console.log('Body :',allnotes[i].body);
      console.log('---');
    }
  }
}else if (command==="read") {
  var fetch=notes.getNote(argv.title);
  if (fetch) {
    console.log('Note found');
    console.log('---');
    console.log('Title:', fetch[0].title);
    console.log('Body:', fetch[0].body);
  }else{
    console.log('Note not found');
  }
}else if (command==="remove") {
  var noteremoved=notes.remove(argv.title);
  var message=noteremoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}else {
  console.log('no such command exists');
}
