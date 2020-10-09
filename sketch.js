const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,370,50,50);
    box2 = new Box(800,370,50,50);
    ground=new Ground(600,390,1200,10);
    pig1 = new Pig(700,370,50,50);
    log1 = new Log(700,365,300,8,PI);
    box3 = new Box(600,320,50,50);
    box4 = new Box(800,320,50,50);
    pig2 = new Pig(700,320,50,50);
    log2 = new Log(700,280,300,8,PI);
    box5 = new Box(700,250,50,50);
    log3 = new Log(750,250,150,8,PI/3)
    log4 = new Log(650,250,150,8,PI/-3)
    bird1 = new Bird(200,250,50,50);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    
   
}