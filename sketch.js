
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, bin1, bin2, bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	paper = new Paper(200, 450);

	//bin1 = new Bin(1100, 800, 150, 20);
	bin2 = new Bin(1000, 615, 40, 150);
	bin3 = new Bin(1200, 615, 40, 150);

	ground = new Ground(20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
 Engine.update(engine);
  
	paper.display();
	//bin1.display();
	bin2.display();
	bin3.display();
	ground.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1000});
  
	}
}



