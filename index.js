var ball = new Ball($("#ball").position().left, $("#ball").position().left);

$(document).ready(function(){

  setInterval(function () {renderBall(); ball.collisions();},10);

});

function renderBall() {
    ball.move();
    $('#ball').css("left", ball.x);
    $('#ball').css("top",  ball.y);
}
