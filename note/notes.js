const fs=require('fs');

var fetchnotes=()=>{
    try{
      var notestring=fs.readFileSync('notes-data.json');
      return JSON.parse(notestring);
    }catch(e){
      return [];
    }
};

var savenotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote=(title,body)=>{

  var notes=fetchnotes();
  var note={
    title,
    body
  };
  var dupliatenotes=notes.filter((note)=>note.title===title);
  if (dupliatenotes.length==0) {
    notes.push(note);
    savenotes(notes);
    return note;
  }
};

var getAll=()=>{
  return fetchnotes();
};

var getNote=(title)=>{
  var notes=fetchnotes();
  var fetchednotes=notes.filter((note)=>note.title===title);
  if(fetchednotes.length==1){
      return fetchednotes;
  }

}

var remove=(title)=>{
  var notes=fetchnotes();
  var filterednotes=notes.filter((note)=>note.title!==title);
  savenotes(filterednotes);
  return notes.length!==filterednotes.length;
}

module.exports={
    addNote,
    getAll,
    getNote,
    remove
};
