class Box {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            density: 0.001,
            friction: 1
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
    }
    display(color, border) {
        var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 3) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill(color);
            stroke(border);
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            pop();
        }
    }
}

