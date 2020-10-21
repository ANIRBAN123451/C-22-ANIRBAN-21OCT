//Calling Matter functions
const Engine=Matter.Engine;//provides mechanics
const World=Matter.World;//provides background
const Bodies=Matter.Bodies;//provides objects
var engine,world,object1,ground;
function setup() {
  createCanvas(600,600);
  //Creating our engine
  engine=Engine.create();
  //Connecting our world to our engine
  world=engine.world;
  //Creating objects
  var objectOptions={
    'restitution':1.0
  };
  object1=Bodies.rectangle(100,100,20,20,objectOptions);
  var groundOptions={
    isStatic:true
  };
  ground=Bodies.rectangle(200,550,400,20,groundOptions);
  //Adding objects and our world to the main world
  World.add(world,object1);
  World.add(world,ground);
  console.log(object1);
}

function draw() {
  background(255,255,255);
  //Updating the engine
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object1.position.x,object1.position.y,20,20);
  rect(ground.position.x,ground.position.y,400,20);
}