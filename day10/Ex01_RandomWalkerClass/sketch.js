// some walker objects
let walker1, walker2, walker3;

function setup() {
  createCanvas(500,500);

  // create our walker objects
  walker1 = new RandomWalker(width/2, height/2);
  walker2 = new RandomWalker(width/2, height/2);
  walker3 = new RandomWalker(width/2, height/2);
}

function draw() {
  background(0,10);

  // move our walkers and display them
  walker1.move();
  walker2.move();
  walker3.move();
  walker1.display();
  walker2.display();
  walker3.display();
}

// this class models a random walker
class RandomWalker {

  constructor(x,y) {
    // store our position
    this.x = x;
    this.y = y;

    // store our size
    this.size = 20;

    // pick a random direction to move in
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);

    // how long should we keep moving in this direction?
    this.framesMax = int(random(100));

    // keep track of how long we have been moving
    this.framesCurrent = 0;

    // pick a random color
    // the 'color' function in p5 packages up multiple color
    // values into a single value
    this.color = color( random(255), random(255), random(255) );
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    // mark this as a frame in which we moved
    this.framesCurrent++;

    // update direction based on speed
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // wrap around
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = width;
    }

    // is it time to change direction?
    if (this.framesCurrent >= this.framesMax) {
      // pick a random direction to move in
      this.xSpeed = random(-2, 2);
      this.ySpeed = random(-2, 2);

      // how long should we keep moving in this direction?
      this.framesMax = int(random(100));

      // keep track of how long we have been moving
      this.framesCurrent = 0;
    }
  }
}
