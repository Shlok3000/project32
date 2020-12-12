const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];
var ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14,block15;
var block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24;
var block25;  
var polygon, slingShot;
var score = 0;
function setup() {
  createCanvas(800,800);

  this.image = loadImage("TowerSiege-1-main/polygon.png");

  ground1 = new Ground(400,400,350,10); 
  ground2 = new Ground(600, 700, 175,10);

  block1 = new Box(425,425,25,50);
  block2 = new Box(450,425,25,50);
  block3 = new Box(475,425,25,50);
  block4 = new Box(500,425,25,50);
  block5 = new Box(525,425,25,50);
  block6 = new Box(550,425,25,50);
  block7 = new Box(575,425,25,50);
  block8 = new Box(450,475,25,50);
  block9 = new Box(475,475,25,50);
  block10 = new Box(500,475,25,50);
  block11 = new Box(525,475,25,50);
  block12 = new Box(550,475,25,50);
  block13 = new Box(475,525,25,50);
  block14 = new Box(500,525,25,50);
  block15 = new Box(525,525,25,50);
  block16 = new Box(500,575,25,50);
  block17 = new Box(625,725,25,50);
  block18 = new Box(650,725,25,50);
  block19 = new Box(675,725,25,50);
  block20 = new Box(700,725,25,50);
  block21 = new Box(725,725,25,50);
  block22 = new Box(650,750,25,50);
  block23 = new Box(675,750,25,50);
  block24 = new Box(700,750,25,50);
  block25 = new Box(675,725,25,50);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

  stroke(255);
 
  a=height;
  circles.push(width/2)
}

function draw() {

  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, 750, 40)

  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  polygon.display();
  slingShot.display();

  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
     background(0);
  }
  else{
      background(255);
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}