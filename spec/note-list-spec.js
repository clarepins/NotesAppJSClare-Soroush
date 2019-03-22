function testNoteCreated() {
  var countNoteDoubleCreated = 0
  function NoteDouble() {
    countNoteDoubleCreated += 1
  }

  var noteList = new NoteList(NoteDouble)
  noteList.createNote('abc')

  assert.isTrue(countNoteDoubleCreated === 1)
}

function testNewNoteAddedToList() {
  function NoteDouble() {}

  var noteList = new NoteList(NoteDouble)
  noteList.createNote('abc')
  noteList.createNote('abc')

  assert.isTrue(noteList.getNotes().length === 2)
}

function addingIdToNoteWhenCreating(){
  var NoteDouble = function(){};
  noteList = new NoteList(NoteDouble);
  noteList.createNote("abc");
  noteList.createNote("def")
  console.log(noteList.notes[0].id);
  console.log(noteList.notes[1].id)
  assert.isTrue(noteList.notes[0].id === 0)
  assert.isTrue(noteList.notes[1].id === 1 )
}

testNoteCreated();
testNewNoteAddedToList();
addingIdToNoteWhenCreating();
