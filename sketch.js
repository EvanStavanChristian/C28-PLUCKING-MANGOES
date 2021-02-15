
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(1000, 100, 12, 12)
	ground = new Ground(700, 590, 1400, 20);
	stone = new Stone(200, 200, 10, 10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("silver");
  
  tree.display();
  ground.display();
  stone.display();
 
}



