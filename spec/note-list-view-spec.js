function testReturnsEmptyString() {
  var NoteListDouble = {
    getNotes: function(){
      return [];
    }
  }
  NoteListDouble.getNotes()

  var noteListView = new NoteListView(NoteListDouble);
  var viewString = noteListView.getNoteString();
  assert.isTrue(viewString === "<ul></ul>")
}

testReturnsEmptyString();

function testReturnsHtmlWithOneNote() {
  var noteDouble = {
    showText: function(){
      return "abc";
    }
  }

  var NoteListDouble = {
    getNotes: function(){
      return [noteDouble];
    }
  }

  var noteListView = new NoteListView(NoteListDouble);
  assert.isTrue(noteListView.getNoteString() === "<ul><li><div>abc</div></li></ul>")
}

testReturnsHtmlWithOneNote()
