const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var hammer;
var plane;
var stone;
var rubber;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(2000,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(100, 200);
	plane = new Plane(600,height,2000,30);
	stone = new Stone(700,320,70,70);
	rubber = new Rubber(810, 350);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();

  
}