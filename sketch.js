const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,objects,ball;




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var objects_options={
  isStatic:true
   }
  objects=Bodies.rectangle(400,390,800,50,objects_options);
  World.add(world,objects);
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(400,100,20,ball_options)
  World.add(world,ball);
}

function draw() {
  background("blue")
  Engine.update(engine)
  rectMode(CENTER);
  rect(objects.position.x,objects.position.y,800,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}