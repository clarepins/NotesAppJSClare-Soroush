
// window.addEventListener('load', function() {
//   // console.log(document.getElementById("app").innerText);
//   document.getElementById("app").innerHTML ="soroush" ;
// })


  window.addEventListener('load', function() {
    var noteList = new NoteList(Note);
    var controller = new Controller(noteList , "Favourite drink: seltzer");
  // var controller = new Controller(noteList , "Favourite drink: seltzer");
    var noteListView = new NoteListView(noteList)
    document.getElementById("app").innerHTML = noteListView.getNoteString();



    // console.log(document.getElementById("app").innerText);

});

function Controller(noteList,text){
  this.noteList = noteList ;
  this.text = text;
  this.noteList.createNote(this.text);
}
