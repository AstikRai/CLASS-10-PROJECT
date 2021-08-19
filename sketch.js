
var seaImage,shipImage1 ;


function preload(){
   
    seaImage = loadImage("sea.png");
    shipImage1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  background("blue")
  sea = createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -2;
  sea.scale = 0.3;

  ship = createSprite(130,200,30,30);
  ship.addAnimation("running",shipImage1);
  ship.scale = 0.25;
}

function draw() {
  background("blue");

    
    
    
    sea.velocityX = -2;
    if(sea.x<0){
    sea.x = sea.width/8;

    }

   


    drawSprites();
}