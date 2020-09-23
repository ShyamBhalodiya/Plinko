class plinko{
    constructor(x,y,r){
        this.r = r ;
        var option ={
            isStatic:true
        }
        this.body = Bodies.circle(x,y,this.r/2,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        noStroke();
        ellipseMode(CENTER);
        ellipse(0,0,this.r);
        pop();
    }
}