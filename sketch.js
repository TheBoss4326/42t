var bg, bgImg, birdimg
var bottomGround
var topGround
var balloon, balloonImg
var obstop1, obstop2, obsbottom1, obsbottom2, obsbottom3
var obstop 
function preload(){
bgImg = loadImage("assets/bg.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
obstop1 = loadImage("assets/obsTop1.png")
obstop2 = loadImage("assets/obsTop2.png")
obsbottom1 = loadImage ("assets/obsBottom1.png")
obsbottom2 = loadImage ("assets/obsBottom2.png")
obsbottom3 = loadImage ("assets/obsBottom3.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -3;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.1;
           
        drawSprites();
        obstacleTop()
}

function obstacleTop() {
if (World.frameCount % 60 === 0 ) {

  obstop = createSprite(400, 50, 40, 50)
  obstop.y = Math.round(random(10, 60))
  obstop.velocityX = -2
  obstop.scale = 0.1
  var rand = Math.round(random (1,2))
  switch(rand) {
    case 1:obsTop.addImage(obstop1)
          break;
    case 2:obsTop.addImage(obstop2)
          break;
    default:break;
  }

  obstop.lifetime = 100
  balloon.depth = balloon.depth + 1
}




}

















