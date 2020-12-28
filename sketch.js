const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter . Body;

var maxDrops=100

function preload(){
    
}

function setup(){
   createCanvas(200,500)

   Umberalla= new Umberalla(100,250,20,20)
    
}

function draw(){
  background("black");
  drawSprites();  

for (var i=0; i<maxDrops; i++){
drops.push(new createDrop(random(0,400),   random(0,400)))
}

if(this.rain.position.y >height){
Matter.Body.setPosition(this.rain, {x:random(0,400),  y:random(0,400)})
} 
}   

