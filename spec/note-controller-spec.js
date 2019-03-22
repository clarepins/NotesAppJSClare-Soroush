function controllerIsInstanciated(){
  var text ;
  var notelist = {
    createNote: function(){}
  }
  var controller = new Controller(notelist, text);
  assert.isTrue(controller.text === text);
  assert.isTrue(controller.noteList === notelist);
}
controllerIsInstanciated()

function pageHasTheString() {
  var text;
  var notelist = {
    createNote: function() {},
  }
  var controller = new Controller( notelist, text);
  var NoteListViewDouble = function() {} ;
  NoteListViewDouble.prototype.getNoteString = function() {
    return("<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  }
  var noteListView = new NoteListViewDouble ;
  window.addEventListener('load', function() {
    controller.insertIntoAppElement(NoteListViewDouble);
    var appInclusion = document.getElementById("app").innerHTML;
    assert.isTrue(appInclusion ===  "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  });
}
pageHasTheString()

// function onHashChangeExpectFullNoteToLoad() {
//   var text = "abcdefghiklmnopqrstuvwxyz123456789"
//   var notelist = {
//     createNote: function() {}
//   }
//   var controller = new Controller(notelist, text);
//   var NoteListViewDouble = function() {};
//
// 
//
// };
