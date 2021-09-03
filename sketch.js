const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];
var bars=[];
 var plinkos=[];

 var barHeight=250;
function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;
  for(var k=0;k<=800;k=k+80){
    bars.push(new bar(k,height-barHeight/2,10,barHeight) )
  }
 
for(var j=40;j<=width;j=j+50){
  plinkos.push(new plinko(j,75))
  }
  for(var j=15;j<=width;j=j+50){
 plinkos.push(new plinko(j,175))
 }
 for(var j=0;j<=width;j=j+50){
 plinkos.push(new plinko(j,275))
 }
 ground=new Ground(240,590,480,20)
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var k=0;k<=10;k=k+1){
    bars[k].display();
  }
  for(var j=0;j<plinkos.length;j=j+1){
plinkos[j].display();
  } 
  if(frameCount%60===0){
    particles.push(new Ball(random(width/2-30, width/2+30), 10,10));
    
  }
  for(var j=0;j< particles.length;j++){
    particles[j].display();
  }
 ground.display();
  drawSprites();
}