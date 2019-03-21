function controllerIsInstanciated(){
  var text ;
  var notelist = {
    createNote: function(){}
  }
  var controller = new Controller( notelist, text);
  assert.isTrue(controller.text === text);
  assert.isTrue(controller.noteList === notelist);
}
controllerIsInstanciated()

function pageHasTheString(){
  // window.addEventListener('load', function() {
  // console.log(document.getElementById('app').innerHTML);
  // var appInclusion = document.getElementById("app").innerHTML;
  // assert.isTrue( appInclusion === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
  var text ;
  var notelist = {
    createNote: function(){},
  }
  var controller = new Controller( notelist, text);
  var noteListView = new NoteListView(notelist);
  noteListView = {
    getNoteString: function(){
      return "<ul><li><div>Favourite drink: seltzer</div></li></ul>";
      }
    }
    window.addEventListener('load', function() {
    console.log(document.getElementById('app').innerHTML);
    var appInclusion = document.getElementById("app").innerHTML;
    assert.isTrue(appInclusion ===  "<ul><li><div>Favourite drink: seltzer</div></li></ul>" );
    });
}
pageHasTheString()
