// source artwork
let artwork;

// wanderer array
let theWanderers = [];

function preload() {
  // load our artwork
  artwork = loadImage('images/monalisa.jpg');
}

function setup() {
  createCanvas(500, 500);

  // randomize perlin noise landscape
  noiseDetail(24);

  // slice up our image into a series of smaller strips
  // we will send those strips into a bunch of 'Wanderer' objects
  // and have them move around the world randomly
  for (let x = 0; x < artwork.width; x += 10) {
    for (let y = 0; y < artwork.height; y += 10) {
      // cut out a strip
      let strip = createGraphics(10, 10);
      strip.copy(artwork, x, y, 10, 10, 0, 0, 10, 10);

      // construct a new wanderer
      let tempWanderer = new Wanderer(x, y, strip);

      // add the wanderer to our array
      theWanderers.push(tempWanderer);
    }
  }
}

function draw() {
  background(0,10);

  // move the origin point of the screen so we can center everything
  push();
  translate(150, 100);

  // display all wanderers
  for (let i = 0; i < theWanderers.length; i++) {
    theWanderers[i].displayAndMove();
  }

  // restore the origin point
  pop();
}

class Wanderer {

  constructor(x, y, myImage) {
    // store our initial position
    this.x = x;
    this.y = y;

    // also store our "desired" position
    this.desiredX = x;
    this.desiredY = y;

    // store our image
    this.myImage = myImage;

    // perlin noise offset
    this.xOffset = random(1000);
    this.yOffset = random(2000, 3000);
  }

  // display and move function
  displayAndMove() {
    // if the mouse is not pressed we should wander using perlin noise
    if (!mouseIsPressed) {
      this.x += map(noise(this.xOffset), 0, 1, -1, 1);
      this.y += map(noise(this.yOffset), 0, 1, -1, 1);
      this.xOffset += 0.01;
      this.yOffset += 0.01;
    }
    // if the mouse isn't pressed we should try and move back to our desired spot
    else {
      // compute x & y distance
      let xDist = this.desiredX - this.x;
      let yDist = this.desiredY - this.y;

      // move a little bit
      this.x += xDist * 0.05;
      this.y += yDist * 0.05;
    }

    // display ourselves
    image(this.myImage, this.x, this.y);
  }
}
