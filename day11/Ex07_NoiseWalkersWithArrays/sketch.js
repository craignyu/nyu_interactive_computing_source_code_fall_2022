// an array to hold our noise walkers
let walkerArray;

function setup() {
  createCanvas(500, 500);
  noStroke();

  // request a detailed noise landscape
  noiseDetail(24);

  // create our walker array
  walkerArray = [];

  // fill the walker array with 100 walkers!

  // loop 100 times
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

    // create a "noise offset" to keep track of our position in Perlin Noise space
    this.xNoiseOffset = random(0,1000);
    this.yNoiseOffset = random(1000,2000);
  }

  // display mechanics
  display() {
    fill(255);
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
