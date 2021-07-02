var garden,rabbit;
var gardenImg,rabbitImg, appleImg, leafImg;
var apple,leaf;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple1.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  // move rabbit by mouse x
  rabbit.x = World.mouseX;
  
  var select_sprites = Math.round(random(1,2));


if (frameCount % 80 == 0) {
  if (select_sprites == 1){
    createApples();
  }
  
} else {
  createLeaves();
}

  drawSprites();
}

function createApples (){
  if(frameCount%80===0){
    
  apple = createSprite(random(50, 350), 40, 20, 10);
  
  // image
  apple.addImage(appleImg)
  // scale
    apple.scale =0.09;
  apple.velocityY =  5;
  apple.lifetime = 100;

    if(apple.y>375){
      apple.destroy();
    }

}
}
function createLeaves(){
  if(frameCount%100===0){
  
    leaves = createSprite(random(50, 350), 40, 10, 10);

  leaves.addImage(leafImg);

  leaves.scale = 0.09;
  leaves.velocityY =5;
  leaves.lifetime = 100;

  if(leaves.y>375){
    leaves.destroy();
  }
}
}