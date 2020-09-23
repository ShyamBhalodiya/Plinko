const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Runner = Matter.Runner;

var engine, world;
var Division = [];
var Plinko = [];
var Particle = [];

function setup() {
  createCanvas(480, 800);

  engine = Engine.create();
  world = engine.world;

  Ground = new ground(width / 2, 790);

  render = Render.create({
    element: document.body,
    engine:engine,
    option:{
      width:480,
      height:800,
      wireframes:false
    }
  });

  Render.run(render);
  
  var runner = Runner.create();
  Runner.run(runner,world);

  Engine.run(engine);

}

function draw() {
  background(0);

  //divisons
  divisionheight = 300;
  for (var x = 0; x < 560; x += 80) {
    Division.push(new division(x, height - divisionheight / 2, 10, divisionheight));
  }
  
  //plinkoes
  plinkoradius = 20;
  for (var i = 40; i <= 480; i += 50) {
    Plinko.push(pli = new plinko(i, 75, plinkoradius));
    pli.display();
  }
  for (var j = 15; j <= 480; j += 50) {
    Plinko.push(pli2 = new plinko(j, 175, plinkoradius));
    pli2.display();
  }
  for (var k = 40; k <= 480; k += 50) {
    Plinko.push(pli3 = new plinko(k, 275, plinkoradius));
    pli3.display();
  }
  for (var k = 15; k <= 480; k += 50) {
    Plinko.push(pli3 = new plinko(k, 375, plinkoradius));
    pli3.display();
  }

  //particles
  if (frameCount % 60=== 0) {
    Particle.push(new particle(random(width/2+10,width/2-10),10,20));
  }
  for(var j=0; j<Particle.length ; j++){
    Particle[j].display();
  }
  for(var k = 0 ;k<Division.length ; k++){
    Division[k].display();
  }

  //ground
  Ground.display();

  drawSprites();

}