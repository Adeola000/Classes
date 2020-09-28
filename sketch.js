const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    bird1 = new Bird(50,50)
    log4 = new Log(270,100,100,-PI/7)
    log3 = new Log(220,100,100,PI/7)
    box5 = new Box(250,100,50,50)
    log2 = new Log(250,150,180,PI/2)
    box4 = new Box(200,200,50,50)
    box3 = new Box(300,200,50,50)
    pig2 = new Pig(250,200)
    log1 = new Log(250,250,180,PI/2)
    box1 = new Box(200,300,50,50);
    box2 = new Box(300,300,50,50);
    pig1 = new Pig(250,300)
    ground = new Ground(200,height,400,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
   

    bird1.display()
    log4.display()
    log3.display()
    box5.display()
    log2.display()
    box4.display()
    box3.display()
    pig2.display()
    log1.display()
    box1.display();
    box2.display();
    pig1.display()
    ground.display();
}