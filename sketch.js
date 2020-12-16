//create variables
var fixedRect, movingRect, object1, object2, object3, object4;


function setup() {
  createCanvas(800,400);

  //create sprites
  fixedRect = createSprite(200, 200, 80, 50);
  movingRect=createSprite(300,200,50,50);
  object1=createSprite(100,200,50,50);
  object2=createSprite(300,200,50,50);
  object3=createSprite(50,100,50,50);
  object4=createSprite(50,300,50,50);

  //make them green
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  object1.shapeColor="green";
  object2.shapeColor="blue";
  object3.shapeColor="purple";
  object4.shapeColor="pink";

  //give velocities to 3 and 4
  object3.velocityY=2;
  object4.velocityY=-2;

}

function draw() {
  background(255,255,255); 

  //use mouse to control moving rect
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  //call is touching function 
  if (isTouching(object2,movingRect) == true){
     //change color to red
    object2.shapeColor="red";
    movingRect.shapeColor="red";
    console.log("It's Collided!");
  } else {
 
    //keep them green
    object2.shapeColor="green";
    movingRect.shapeColor="green";
    
  }

  bounce(object3,object4)
  

  //show sprites
  drawSprites();
}

