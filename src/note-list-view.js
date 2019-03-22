(function(exports) {
  function NoteListView(NoteList){
    this.NoteList = NoteList;
  }
  NoteListView.prototype.getNoteString = function() {
    var notesHtmlString = "<ul>"

    this.NoteList.getNotes().forEach(function(note) {
      // notesHtmlString = `${notesHtmlString}<li><div>${note.showText()}</div></li>`
      // console.log(note.showText().substr(0,21));
      // var note_text = note.showText().substr(0,20);
      notesHtmlString = notesHtmlString + "<li><div>" + note.showText().substr(0,20) + "</div></li>"
    })

    // return `${notesHtmlString}</ul>`
    return notesHtmlString + "</ul>"
  }
  exports.NoteListView = NoteListView;
}) (this);
