
function Paddle(x,y) {
  this.x = x;
  this.y = y;
}

var x1 = parseInt($("#paddle1").css("left").replace("px",""));
var y1 = parseInt($("#paddle1").css("right").replace("px", ""));
var userPaddle = new Paddle(x1, y1);

//var musicgame = new Audio ('music/DragonBall.mp3');

/*function moveListeners (event) {
  var keys = [37, 39];

  if (keys.indexOf(event.keyCode) < 0)
    return;

  switch (event.keyCode) {
    case 37: move("left");    break;
    case 39: move("right");  break;
  }
  musicgame.currentTime=0;
  musicgame.play();
}
document.addEventListener("keydown", moveListeners);*/
$ ("#board").mousemove(function(event){
  console.log(event)
  var x = event.clientX-308;
  // var paddlePosition = parseInt($("#paddle1").css("left").replace("px", ""));
  if (event.clientX > 50 && event.clientX < 830){
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
      if (paddlePosition <= 530) {
        paddlePosition += 10;
      }
      break;
  }
  $("#paddle1").css("left", paddlePosition + "px");

}
