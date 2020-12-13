const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var player;
var engine, world;
var form;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  player = new Player();
  form = new Form();
}

function draw() {
  Engine.update(engine);
  background(255);  
  player.display();
  form.display();
}