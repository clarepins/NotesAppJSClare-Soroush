function testInstantiatingSingleNoteView() {
  var note
  var singleNoteView = new SingleNoteView(note);
}

testInstantiatingSingleNoteView();


function testSingleNoteViewReturningHTML() {
  var note = {
    showText: function(){
      return("My Favourite drink: seltzer")
    }
  }
  var singleNoteView = new SingleNoteView(note);

  assert.isTrue(singleNoteView.showHTMLString() === "<div>My Favourite drink: seltzer</div>")
}

testSingleNoteViewReturningHTML();
