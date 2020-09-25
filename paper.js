class Paper {
    constructor(x, y) {

        var options = {

            'retitution': 0.3,
            'density': 1.2,
            'friction': 0.5
    
        }

        this.body = Bodies.circle(x, y, 70, options);
        this.radius = 70;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill(255);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();



    }



}