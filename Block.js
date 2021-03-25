class Block {
  constructor(x, y, angle) {

    var options = {
      restitution: 0.7,
      friction: 0.6,
      isStatic: false,
    }

    this.body = Bodies.rectangle(x, y, 30, 40, options);

    World.add(world, this.body);
  }
  display() {

    var angle = this.body.angle;

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, 30, 40);
    pop();
  }
}
