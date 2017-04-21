
$(document).ready(function(){

     for(var x=1;x<=11;x++){
       for(var y=1;y<=13;y++){
         $("#board").append("<div class='brick' id='brick-"+x+"-"+y+"'></div>");
         $("#brick-"+x+"-"+y).css("top",x*20)
         $("#brick-"+x+"-"+y).css("left",y*40)

        }
     }
});
var score1 = 0;
setInterval(function(){
  // var actualPositionPaddle=parseInt($("#paddle1").css("left").replace("px", ""));
  var actualPositionBall= $("#ball").position();

  var allBricks = $(".brick");
  arrayAllBricks = allBricks.toArray();
  arrayAllBricks.forEach(function(e){
    var actualPositionBricks = $("#"+e.id).position()
    if(actualPositionBall.left + 15 > actualPositionBricks.left &&
      actualPositionBall.left < actualPositionBricks.left + 40 &&
      actualPositionBall.top + 15 > actualPositionBricks.top &&
      actualPositionBall.top < actualPositionBricks.top + 20) {
    ball.switchDirection(actualPositionBricks, actualPositionBall);
    $("#"+e.id).remove();
    score1++;
    $(".score1").text(score1)
    }
  })
}, 2)
