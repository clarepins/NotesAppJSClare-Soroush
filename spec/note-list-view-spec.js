function testReturnsEmptyString() {
  var noteDouble = {
    showText: function(){
      return("");
    }
  }
  var NoteListDouble = {
    getNotes: function(){
      return [noteDouble];
    }
  }
  var noteListView = new NoteListView(NoteListDouble);
  var viewString = noteListView.getNoteString();
  assert.isTrue(viewString === "<ul><li><div></div></li></ul>")
}

testReturnsEmptyString();

function testReturnsHtmlWithOneNote() {
  var noteDouble = {
    showText: function(){
      return "abcdefghiklmnopqrstuvwxyz";
    }
  }

  var NoteListDouble = {
    getNotes: function(){
      return [noteDouble];
    }
  }

  var noteListView = new NoteListView(NoteListDouble);
  console.log(noteListView.getNoteString())
  assert.isTrue(noteListView.getNoteString() === "<ul><li><div>abcdefghiklmnopqrstu</div></li></ul>")
}

testReturnsHtmlWithOneNote()
