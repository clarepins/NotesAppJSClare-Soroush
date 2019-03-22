(function(exports) {
  function NoteListView(NoteList){
    this.NoteList = NoteList;
  }
  NoteListView.prototype.getNoteString = function() {
    var notesHtmlString = "<ul>"

    this.NoteList.getNotes().forEach(function(note) {
      notesHtmlString = notesHtmlString + "<li><div>" + note.showText().substr(0,20) + "</div></li>"
    })

    return notesHtmlString + "</ul>"
  }
  exports.NoteListView = NoteListView;
}) (this);
