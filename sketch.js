const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1,box2,box3,box4,mbox,pig1,pig2,log1,log2,log3,log4,bird;

function setup(){
    var canvas = createCanvas(700,700);
    engine = Engine.create();
    world = engine.world;
    log1 = new Log(245,650,240,PI/2)
    box1 = new Box(200,670);
    pig1 = new Pig(230,670);
    box2 = new Box(280,670);
    ground = new Ground(350,height,700,20)
    log2 = new Log(245,610,240,PI/2)
    box3 = new Box(200,630)
    box4 = new Box(280,630)
    pig2 = new Pig(230,630)
    mbox = new Box(240,590)
    log3 = new Log(212,590,100, PI/7)
    log4 = new Log(267,590,100,-PI/7)
    bird = new Bird(500,200)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    mbox.display();
    log3.display();
    log4.display();
    bird.display();
}