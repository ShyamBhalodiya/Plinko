class division {
    constructor(x, y, w, h) {
        this.w = w;
        this.h = h;
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, this.w / 1.2, this.h / 1.2, option);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill(255);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}