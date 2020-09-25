class Ground {

    constructor(height) {

        var options = {

            isStatic: true

        }

        this.body = Bodies.rectangle(800, 680, 1700, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);

    }

}