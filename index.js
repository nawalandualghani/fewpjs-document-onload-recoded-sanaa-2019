// Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
// updateDOM();
// });
//
// function updateDOM(){
// let element =document.getElementById( "text" );
// element.innerText= "This is really cool!";
// }
document.addEventListener( "DOMContentLoaded", function () {
  updateDOM()
} );


function updateDOM() {
  document.getElementById( "text" )
    .innerHTML = "This is really cool!";
  }
