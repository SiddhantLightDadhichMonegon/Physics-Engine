// engine is used to create physics engine
const Engine = Matter.Engine;
//bodies are used to create physical objects
const Bodies = Matter.Bodies;
//world is used to make physical world
const World = Matter.World;

var world,engine;

var object,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var object_options = {
        restitution: 0.8
    }
    object = Bodies.circle(200,10,50,object_options);
    World.add(world,object);
    console.log(object);
    console.log(object.type);
    console.log(object.position.x);
    console.log(object.position.y);
    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(200,390,400,50,ground_options);
    World.add(world,ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    //rect(object.position.x,object.position.y,50,50);
    rect(ground.position.x,ground.position.y,400,50);
    ellipseMode(RADIUS);
    ellipse(object.position.x,object.position.y,50,50);
    

    
}