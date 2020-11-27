function setup() {
  createCanvas(400,400);
  fixed = createSprite(100, 100, 50, 50);
  fixed.debug = true;
  fixed.velocityY = 1;

  moving = createSprite(100,200,50,50);
  moving.debug = true;
  moving.velocityY = -1;

  ball1 = createSprite(200,100,50,50);
  ball1.debug = true;
  ball1.shapeColor="magenta";
ball1.velocityX=1;

ball2 = createSprite(300,100,50,50);
ball2.debug=true;
ball2.shapeColor="yellow";
ball2.velocityX=-1;
}

function draw() {
  background("blue");  
  
  //moving.x=mouseX;
  //moving.y=mouseY;
  if(isTouching(moving,fixed)){
    moving.shapeColor="red";
    fixed.shapeColor="red";
    bounceoff(moving,fixed);
  }
  else{
    moving.shapeColor="green";
    fixed.shapeColor="green"; 
  }
  
  if(isTouching(ball1,ball2)){
    ball1.shapeColor="red";
    ball2.shapeColor="red";
    bounceoff(ball1,ball2);

  }
  

  drawSprites();
}
