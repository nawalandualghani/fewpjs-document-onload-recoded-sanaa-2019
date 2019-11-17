// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

  let event = document.createEvent( 'Event' );
  event.initEvent( 'DOMContentLoaded', true, true );
  window.document.dispatchEvent( event );
