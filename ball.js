
function Ball(x, y) {
    this.positionX = x;
    this.positionY = y;
    this.actualDirectionX = -1;
    this.actualDirectionY = -1;
    this.randomVelocityFactorX = 0;
    this.randomVelocityFactorY = 0;
}

Ball.prototype._randomDirection = function() {
    return Math.round(Math.random());
};

Ball.prototype._randomVelocityFactor = function(){
    this.randomVelocityFactorX = Math.random() * (4 - 1) + 1;
    this.randomVelocityFactorY = Math.random() * (4 - 1) + 1;
};

//ball vs brick

Ball.prototype.switchDirection = function(ballPosition, brickPosition){
    this.actualDirectionX *= -1;
    this.actualDirectionY *= -1;
    this._randomVelocityFactor();
};

Ball.prototype.move = function() {

    this.positionX = parseInt($("#ball").css("left").replace('px', ''));
    this.positionY = parseInt($("#ball").css("top").replace('px', ''));

    var movement = 3;

    if (this.positionX <= 0 || this.positionX >= 580)
        this.actualDirectionX *= -1;

    if (this.positionY <= 0 || this.positionY >= 780)
        this.actualDirectionY *= -1;

    this.positionX += (movement + this.randomVelocityFactorX) * this.actualDirectionX;
    this.positionY += (movement + this.randomVelocityFactorY) * this.actualDirectionY;

    $("#ball").css("left", this.positionX + "px");
    $("#ball").css("top", this.positionY + "px");
};

Ball.prototype.collisions = function(){
  var ballY = parseInt($("#ball").css("top").replace('px', ''));
  var paddleY = parseInt($("#paddle1").css("top").replace('px', ''));
  var paddleX = parseInt($("#paddle1").css("left").replace('px', ''));
  var ballX = parseInt($("#ball").css("left").replace('px', ''));

  if (ballX > paddleX && ballX < (paddleX + 80) ){
    if (ballY +18 >= paddleY) {
      this.actualDirectionY *= -1;
      this._randomVelocityFactor();
    }
  }
  if (ballY > paddleY) {
   gameFinished()
  }
};

function gameFinished(){
  var musicgame = document.getElementById('music');
  var ballY = parseInt($("#ball").css("top").replace('px', ''));
  var paddleY = parseInt($("#paddle1").css("top").replace('px', ''));

  if (ballY > paddleY)
    $('.gameOver').css('visibility', 'visible')
    $(".paddle").remove();
    $(".brick").remove();
    $("#ball").remove();
    $(".timenumber").remove();
    musicgame.stop();
    clearInterval(ballInterval)

}
