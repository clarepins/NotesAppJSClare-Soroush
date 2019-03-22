window.addEventListener('load', function() {
  var noteList = new NoteList(Note);
  var controller = new Controller(noteList , "Favourite drink: seltzer");
  var controller = new Controller(noteList , "second fooddddddd");
  controller.insertIntoAppElement(NoteListView);
  controller.updateDOM();



});

(function(exports) {
  function Controller(noteList, text){
    this.noteList = noteList ;
    this.text = text;
    this.noteList.createNote(this.text);

  }

  Controller.prototype.insertIntoAppElement = function(noteListView) {
    var noteListView = new NoteListView(this.noteList);
    document.getElementById("app").innerHTML = noteListView.getNoteString();
  }

  Controller.prototype.getNoteId =function(){
    console.log(window.location.hash.split("#notes/")[1])
    return window.location.hash.split("#notes/")[1];
  }

  Controller.prototype.setInnerHtmlText = function(noteList){
    var noteId = this.getNoteId();
    console.log(noteId);
    var note = noteList.getNotes()[noteId];
    console.log(note);
    var singleNoteView = new SingleNoteView(note);
    console.log(singleNoteView)
    console.log(singleNoteView.showHTMLString());
    document.getElementById("app").innerHtml = singleNoteView.showHTMLString()
  }

  Controller.prototype.updateDOM = function(){
    var self = this;
    console.log(self);
    console.log(self.setInnerHtmlText(self.noteList));
    console.log(self.noteList);
    console.log("hashchange",self.setInnerHtmlText(self.noteList));
    console.log(window.addEventListener("hashchange",self.setInnerHtmlText(self.noteList)));
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
