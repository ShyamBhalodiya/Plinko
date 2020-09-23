class ground{
    constructor(x,y){
        var option ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,35,option);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,width,30);
        pop();
    }
}