(function(exports) {
  function SingleNoteView(note){
    this.note = note;
  }
  SingleNoteView.prototype.showHTMLString = function() {
    return "<div>" + this.note.showText() + "</div>"
  }
  exports.SingleNoteView = SingleNoteView;
}) (this);
