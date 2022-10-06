// a few walker objects
let walker1, walker2, walker3;

function setup() {
  createCanvas(500, 500);
  noStroke();

  // request a detailed noise landscape
  noiseDetail(24);

  // create our walker objects
  walker1 = new NoiseWalker(150, 150);
  walker2 = new NoiseWalker(350, 350);
  walker3 = new RandomWalker(250, 250);
}

function draw() {
  background(0,5);

  // ask each walker to move
  walker1.move();
  walker2.move();
  walker3.move();

  // ask each walker to draw itself
  walker1.display();
  walker2.display();
  walker3.display();
}



// our NoiseWalker class
class NoiseWalker {

  constructor(x, y) {
    // store our position
    this.x = x;
    this.y = y;

    // create a "noise offset" to keep track of our position in Perlin Noise space
    this.xNoiseOffset = random(0,1000);
    this.yNoiseOffset = random(1000,2000);
  }

  // display mechanics
  display() {
    ellipse(this.x, this.y, 25, 25);
  }

  // movement mechanics
  move() {
    // compute how much we should move
    let xMovement = map( noise(this.xNoiseOffset), 0, 1, -1, 1 );
    let yMovement = map( noise(this.yNoiseOffset), 0, 1, -1, 1 );

    // update our position
    this.x += xMovement;
    this.y += yMovement;

    // update our noise offset values
    this.xNoiseOffset += 0.01;
    this.yNoiseOffset += 0.01;
  }
}


// our RandomWalker class
class RandomWalker {

  constructor(x, y) {
    // store our position
    this.x = x;
    this.y = y;
  }

  // display mechanics
  display() {
    fill(255);
    ellipse(this.x, this.y, 25, 25);
  }

  // movement mechanics
  move() {
    // compute how much we should move
    let xMovement = random(-1,1);
    let yMovement = random(-1,1);

    // update our position
    this.x += xMovement;
    this.y += yMovement;
  }
}
