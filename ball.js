function Ball(x, y) {
    this.positionX = x;
    this.positionY = y;
    this.actualDirectionX = this._randomDirection();
    this.actualDirectionY = this._randomDirection();
}

Ball.prototype._randomDirection = function() {
    return Math.round(Math.random());
};


//ball vs brick

Ball.prototype.switchDirection = function(ballPosition, brickPosition){
    this.actualDirectionX === 0 ? this.actualDirectionX = 1 : this.actualDirectionX = 0;
    this.actualDirectionY === 0 ? this.actualDirectionY = 1 : this.actualDirectionY = 0;
};







// ball vs board
Ball.prototype.move = function() {

    this.positionX = parseInt($("#ball").css("left").replace('px', ''));
    var movement = 4;

    if (0 <= this.positionX && this.positionX <= 580) {
        switch (this.actualDirectionX) {
            case 0:
                //console.log(this.positionX)
                this.positionX += movement;
                $("#ball").css("left", this.positionX + "px");
                if (this.positionX >= 578) this.actualDirectionX = 1;

                break;
            case 1:
            //console.log(this.positionX)
                this.positionX -= movement;
                $("#ball").css("left", this.positionX + "px");
                if (this.positionX <= 2) this.actualDirectionX = 0;
                break;
        }
    }
    this.positionY = parseInt($("#ball").css("top").replace('px', ''));

    if (0 <= this.positionY && this.positionY <= 780) {
      //console.log('position:',this.positionY);
      //console.log('direction: ', this.actualDirectionY);
        switch (this.actualDirectionY) {
            case 0:
                this.positionY += movement;
                $("#ball").css("top", this.positionY + "px");
                if (this.positionY >= 780) this.actualDirectionY = 1;

                break;

            case 1:
                this.positionY -= movement;
                $("#ball").css("top", this.positionY + "px");
                if (this.positionY <= 0) this.actualDirectionY = 0;
                break;
        }
    }
};

Ball.prototype.collisions = function(){
  var ballY = parseInt($("#ball").css("top").replace('px', ''));
  var paddleY = parseInt($("#paddle1").css("top").replace('px', ''));
  var paddleX = parseInt($("#paddle1").css("left").replace('px', ''));
  var ballX = parseInt($("#ball").css("left").replace('px', ''));

  if (ballX > paddleX && ballX < (paddleX + 80) ){
    if (ballY +18 >= paddleY) {
      this.actualDirectionY = 1;
    }
  }
  if (ballY > paddleY) {
   gameFinished()
  }
};

function gameFinished(){
  var ballY = parseInt($("#ball").css("top").replace('px', ''));
  var paddleY = parseInt($("#paddle1").css("top").replace('px', ''));

  if (ballY > paddleY)
    alert("Game Over!!");
}
