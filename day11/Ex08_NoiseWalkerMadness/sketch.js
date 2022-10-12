// an array to hold our noise walkers
let walkerArray;

function setup() {
  createCanvas(500, 500);
  noStroke();

  // request a detailed noise landscape
  noiseDetail(24);

  // create our walker array
  walkerArray = [];

  // fill the walker array with 500 walkers!

  // loop 500 times
  for (let i = 0; i < 100; i++) {

    // create a NoiseWalker
    let tempWalker = new NoiseWalker( random(width), random(height) );

    // put the walker into the array
    walkerArray.push( tempWalker );
  }
}

function draw() {
  fill(0,10);
  rect(0,0,width,height);

  // visit each walker
  for (let i = 0; i < walkerArray.length; i++) {
    // ask the walker to move and display
    walkerArray[i].move();
    walkerArray[i].display();
  }
}



// our NoiseWalker class
class NoiseWalker {

  constructor(x, y) {
    // store our position
    this.x = x;
    this.y = y;

    // store our color
    this.r = random(100,255);
    this.g = this.r;
    this.b = this.r;

    // store our size
    this.s = 25;

    // create a "noise offset" to keep track of our position in Perlin Noise space
    this.xNoiseOffset = random(0,1000);
    this.yNoiseOffset = random(1000,2000);
  }

  // display mechanics
  display() {
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.s, this.s);
  }

  // movement mechanics
  move() {
    // compute how much we should move
    let xMovement = map( noise(this.xNoiseOffset), 0, 1, -1, 1 );
    let yMovement = map( noise(this.yNoiseOffset), 0, 1, -1, 1 );

    // update our position
    this.x += xMovement;
    this.y += yMovement;

    // are we close to the mouse?  if so, run away!
    if (dist(this.x, this.y, mouseX, mouseY) < 100) {
      if (mouseX < this.x) {
        this.x += 1;
      }
      else {
        this.x -= 1;
      }
      if (mouseY < this.y) {
        this.y += 1;
      }
      else {
        this.y -= 1;
      }
    }

    // handle wrap-around
    if (this.x > width) {
      this.x = 0;
    }
    else if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    else if (this.y < 0) {
      this.y = height;
    }

    // update our noise offset values
    this.xNoiseOffset += 0.01;
    this.yNoiseOffset += 0.01;

    // did we touch the mouse?
    if (dist(mouseX, mouseY, this.x, this.y) < 12) {

      // change our color
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);

      // shrink a little bit
      this.s -= 1;
    }
    else {
      // grow a tiny bit, if necessary
      if (this.s < 25) {
        this.s += 0.1;
      }
    }
  }
}
