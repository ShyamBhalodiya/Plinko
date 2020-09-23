class particle{
    constructor(x,y,radius){
        this.radius = radius;
        var option ={
            restitution:0.4,
            mass:50
        }
        this.body = Bodies.circle(x,y,this.radius/2,option);
        World.add(world,this.body);
        this.colour = color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        fill(this.colour);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
} 