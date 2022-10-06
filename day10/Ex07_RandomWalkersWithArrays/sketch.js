// array to hold our walkers
let theWalkers = [];

function setup() {
  createCanvas(500, 500);

  // create 30 walkers
  for (let i = 0; i < 30; i++) {
    let temp = new RandomWalker(250, 250);

    // put this walker into our array
    theWalkers.push( temp );
  }
}

function draw() {
  background(0, 50);

  // visit our walkers and ask them to display / move themselves
  for (let i = 0; i < theWalkers.length; i++) {
    theWalkers[i].move();
    theWalkers[i].display();
  }
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
