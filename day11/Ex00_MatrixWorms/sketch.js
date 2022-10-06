// global constant to easily change worm speed
const WORMSPEED = 5;

// our worms
let allWorms = [];

function setup() {
  createCanvas(500,500);

  // create a bunch of worms
  for (let i = 0; i < 1000; i++) {
    allWorms.push( new Worm(random(width), random(height)) );
  }
}

function draw() {
  background(0, 10);

  // ask each worm to move and display itself
  for (let i = 0; i < allWorms.length; i++) {
    allWorms[i].moveAndDisplay();
  }
}

class Worm {
  constructor(x,y) {
    this.x = x;
    this.y = y;

    // pick a random color
    this.color = random(50,128);

    // starting size (default, but will change once the Worm starts moving)
    this.size = 3;

    // set up our starting speed (up, down, left or right)
    this.pickNewSpeed();

    // how long should we move in this direction?
    this.timeToMoveInThisDirection = int(random(20,60));

    // how long have we been moving in this direction?
    this.timeMoving = 0;
  }

  moveAndDisplay() {

    // adjust our color based on where the mouse is
    let d = dist(mouseX, mouseY, this.x, this.y);
    this.size = map(d, 0, 250, 5, 3);

    // worms near the mouse should light up with
    if (d < 100) {
      fill(random(128,255), random(128,255), random(128,255));
    }
    else {
      fill(this.color);
    }

    noStroke();
    rect(this.x, this.y, this.size, this.size);

    // move
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
      this.y = height;
    }

    // should we switch direction?
    this.timeMoving++;
    if (this.timeMoving >= this.timeToMoveInThisDirection) {
      this.pickNewSpeed();
      this.timeMoving = 0;
      this.timeToMoveInThisDirection = int(random(20,60));
    }
  }

  // pick a new speed and direction for this worm
  pickNewSpeed() {
    this.xSpeed = 0;
    this.ySpeed = 0;

    let chance = random(100);
    if (chance < 25) {
      this.xSpeed = -WORMSPEED;
    }
    else if (chance < 50) {
      this.xSpeed = WORMSPEED;
    }
    else if (chance < 75) {
      this.ySpeed = -WORMSPEED;
    }
    else {
      this.ySpeed = WORMSPEED;
    }
  }
}
