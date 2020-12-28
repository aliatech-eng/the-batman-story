class Umberalla{
constructor(x,y,r){
    var options={
isStatic:false,
    }
    walkingimg=loadImage("Walking Frame/walking_1.png")
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
   
    World.add(world,this.body)
}
display(){

var umberallapos=this.body.position

push()
translate(umberalla.x,umberallla.y)
rectMode(CENTER)
strokeWeight(3)
ellipse(0,0,this.r,this.r)
image(this.image,0,0,this.radius);
pop()
}
}