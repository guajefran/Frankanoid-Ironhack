
function Paddle(x,y) {
  this.x = x;
  this.y = y;
}
var board = new Board();

var x1 = parseInt($("#paddle1").css("left").replace("px",""));
var y1 = parseInt($("#paddle1").css("right").replace("px", ""));
var userPaddle = new Paddle(x1, y1);


board.start();

/*function moveListeners (event) {
  var keys = [37, 39];

  if (keys.indexOf(event.keyCode) < 0)
    return;

  switch (event.keyCode) {
    case 37: move("left");    break;
    case 39: move("right");  break;
  }
}
document.addEventListener("keydown", moveListeners);*/
$ ("#board").mousemove(function(event){
  var x = event.clientX-50;
  // var paddlePosition = parseInt($("#paddle1").css("left").replace("px", ""));
  if (event.clientX > 48 && event.clientX < 592){
      $("#paddle1").css("left", x + "px");
  }

})


function move (direction){
  var paddlePosition = parseInt($("#paddle1").css("left").replace("px", ""));

  switch (direction) {
    case "left":
      if (paddlePosition >= 0) {
        paddlePosition -= 10;
      }
      break;
    case "right":
      if (paddlePosition <= 536) {
        paddlePosition += 10;
      }
      break;
  }
  $("#paddle1").css("left", paddlePosition + "px");

}
