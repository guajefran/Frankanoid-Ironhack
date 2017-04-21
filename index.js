var ball = new Ball($("#ball").position().left, $("#ball").position().left);
var ballInterval;


$(document).ready(function(){
  var musicgame = document.getElementById('music');


  $('#start').on('click',init);
  function init(){
    startTimer();
    $(".home").remove();
    //musicgame.currentTime=0;
    musicgame.play();

    ballInterval = setInterval(function () {renderBall(); ball.collisions();},10);
  }
  $('#reset').on('click')
});


function renderBall() {
    ball.move();
    $('#ball').css("left", ball.x);
    $('#ball').css("top",  ball.y);
}

function startTimer () {
  var counter = 120;
  interval = setInterval(function(){
      $(".timenumber").text(counter);
      counter--;
      if (counter < 0) {
        $(".gameOver").css("visibility", "visible");
        $(".paddle").remove();
        $(".brick").remove();
        $("#ball").remove();
        clearInterval(ballInterval)
        clearInterval(interval);
      } else if (counter > 0 && score1 === 121){
        $(".winner").css("visibility", "visible");
        //alert(" WIN WIN WIN!!!");
        //clearInterval(interval);
      }
  }, 1 * 1000);
}
