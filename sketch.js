
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	resitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(200,200,20,ball_options);
World.add(world,ball);
  
ground = new GROUND(width/2670,width,20);
leftSide = new GROUND(1100,600,20,120);
rightSide = new GROUND(1000,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
}



