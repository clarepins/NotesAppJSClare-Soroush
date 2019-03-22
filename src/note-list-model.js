(function(exports) {
  var NoteList = function(Note) {
    this.Note = Note
    this.notes = []
    this.currentId = 0;
  }

  NoteList.prototype.createNote = function(text) {
    var note = new this.Note(text);
    this.notes.push(note);
    note.id = this.currentId;
    this.currentId += 1 ;
  }

  NoteList.prototype.getNotes = function() {
    return this.notes
  }

  exports.NoteList = NoteList
}) (this);
