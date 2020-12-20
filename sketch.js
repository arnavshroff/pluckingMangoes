const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree,treeI;
var boy;
var ground;
var stone;
var sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,
	mango10,mango11,mango12;
var world;

function preload(){
	boy=loadImage("boy.png");
	treeI = loadImage("tree.png");
  }

function setup() {
	createCanvas(1370, 610);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,600,1500,30);
	stone = new Stone(235,420,30);
	sling = new Slingshot(stone.body,{x:240,y:460});
	mango1=new Mango(1220,250,30);
	mango2=new Mango(1200,160,30);
	mango3=new Mango(1140,190,40);
	mango4=new Mango(1000,110,30);
	mango5=new Mango(950,300,30);
	mango6=new Mango(800,270,30);
	mango7=new Mango(900,270,40);
	mango8=new Mango(950,200,40);
	mango9=new Mango(1010,180,30);
	mango10=new Mango(1070,240,40);
	mango11=new Mango(1120,90,40);

	Engine.run(engine);
 
}

function draw() {

  background("cyan");
  textSize(30);
  fill('navy');
  textFont("algerian");
  text("Press Space to get another stone to Play!!",50 ,200);
  
  ground.display();
  imageMode(CENTER);
  image(treeI,1050,365,700,700)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  image(boy ,304,530,200,300);
  sling.display();
  stone.display();


  
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    	Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  	sling.attach(stone.body);
	}
}

function detectollision(lstone,lmango){
  	mangoBodyPosition=lmango.body.position
  	stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}
