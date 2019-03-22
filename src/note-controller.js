window.addEventListener('load', function() {
  var noteList = new NoteList(Note);
  var controller = new Controller(noteList , "Favourite drink: seltzer");
  controller.insertIntoAppElement(NoteListView);

});

(function(exports) {
  function Controller(noteList, text){
    this.noteList = noteList ;
    this.text = text;
    this.noteList.createNote(this.text);

  }

  Controller.prototype.insertIntoAppElement = function(NoteListView) {
    var noteListView = new NoteListView(this.noteList);
    document.getElementById("app").innerHTML = noteListView.getNoteString();
  }

  // Controller.prototype.makeUrlChangeForSingleNoteView = function() {
  //   window.addEventListener("hashchange", setInnerHtmlText)
  // };
  //
  // function setInnerHtmlText() {
  //   var noteId = this.getNoteId()
  //   var noteList = this.noteList
  //   var noteText = noteList.notes[noteId]
  //   var single = new SingleNoteView(noteText)
  //   document.getElementById("app").innerHtml = single.showHTMLString()
  // };
  //
  // function getNoteId() {
  //   return window.location.hash.split("#notes/")[1];
  // };

  exports.Controller = Controller ;
})(this);
