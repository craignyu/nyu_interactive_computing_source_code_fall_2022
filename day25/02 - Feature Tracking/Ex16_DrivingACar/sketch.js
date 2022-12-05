// video capture object
let capture;

// colors we want to track
let r1 = 0;
let g1 = 0;
let b1 = 0;

let r2 = 255;
let g2 = 255;
let b2 = 255;

// keep track of which color we are currently going to set (the user will click to
// set color #1 and then click again to set color #2)
let currentColor = 1;

// what is our current threshold?  This is how sensitve our color detection algorithm should be
// low numbers means more sensitivity, high numbers mean less sensitivity (aka false positives)
let threshold = 20;

// our two tracking positions
let xPos1 = 0;
let xPos2 = 0;
let yPos1 = 0;
let yPos2 = 0;

// rotation for our wheel
let rotation = 0;

// artwork
let car, wheel;

// car object
let theCar;

function preload() {
  car = loadImage('images/car.png');
  wheel = loadImage('images/wheel.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(320, 240);

  // start up our web cam
  capture = createCapture({
    video: {
      mandatory: {
        minWidth: 320,
        minHeight: 240,
        maxWidth: 320,
        maxHeight: 240
      }
    }
  });
  capture.hide();

  // create our car
  theCar = new Car();
}

function draw() {
  // expose the pixels in the incoming video stream
  capture.loadPixels();

  // if we have some pixels to work wtih them we should proceed
  if (capture.pixels.length > 0) {

    // set up variables to test for the best pixel
    let bestLocations1 = [];
    let bestLocations2 = [];

    for (let i = 0; i < capture.pixels.length; i += 4) {
      // determine how close of a match this color is to our desired colors
      let match1 = dist(r1, g1, b1, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match1 < threshold) {
        // this pixel qualifies!  store its location into our array
        bestLocations1.push(i);
      }
      let match2 = dist(r2, g2, b2, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match2 < threshold) {
        // this pixel qualifies!  store its location into our array
        bestLocations2.push(i);
      }
    }

    // draw the video
    imageMode(CORNER);
    image(capture, 0, 0);

    // do we have a best match?  it's possible that no pixels met our threshold
    if (bestLocations1.length > 0) {
      // average up all of our locations
      let xSum = 0;
      let ySum = 0;
      for (let i = 0; i < bestLocations1.length; i++) {
        xSum += (bestLocations1[i] / 4) % 320;
        ySum += (bestLocations1[i] / 4) / 320;
      }

      // average our sums to get our 'centroid' point
      xPos1 = xSum / bestLocations1.length;
      yPos1 = ySum / bestLocations1.length;
    }

    if (bestLocations2.length > 0) {
      // average up all of our locations
      let xSum = 0;
      let ySum = 0;
      for (let i = 0; i < bestLocations2.length; i++) {
        xSum += (bestLocations2[i] / 4) % 320;
        ySum += (bestLocations2[i] / 4) / 320;
      }

      // average our sums to get our 'centroid' point
      xPos2 = xSum / bestLocations2.length;
      yPos2 = ySum / bestLocations2.length;
    }



    // if both colors are visible we can move the car (possibly)
    if (bestLocations1.length > 0 && bestLocations2.length > 0) {
      // compute y difference
      let yDiff = yPos1 - yPos2;

      // turn y difference into left or right controls (just booleans)
      let rotation = 0;
      if (yDiff > 50) {
        theCar.moveLeft();
        rotation = -45;
      }
      if (yDiff < -50) {
        theCar.moveRight();
        rotation = 45;
      }

      // image the wheel on top of the average point
      imageMode(CENTER);
      push();
      translate((xPos1 + xPos2) / 2, (yPos1 + yPos2) / 2);
      rotate(radians(rotation));
      image(wheel, 0, 0);
      pop();

      // ask the car to display itself
      theCar.move();
      theCar.display();
    }
  }
}

function mousePressed() {
  // memorize the color the user is clicking on
  let loc = int( (int(mouseX) + int(mouseY) * capture.width) * 4);

  if (currentColor == 1) {
    r1 = capture.pixels[loc];
    g1 = capture.pixels[loc + 1];
    b1 = capture.pixels[loc + 2];

    console.log("Color 1 - Looking for: R=" + r1 + "; G=" + g1 + "; B=" + b1);
    currentColor = 2;
  } else if (currentColor == 2) {
    r2 = capture.pixels[loc];
    g2 = capture.pixels[loc + 1];
    b2 = capture.pixels[loc + 2];

    console.log("Color 2 - Looking for: R=" + r2 + "; G=" + g2 + "; B=" + b2);
    currentColor = 1;
  }
}

function keyPressed() {
  if (key == 'A') {
    threshold--;
    console.log("Threshold is now: " + threshold);
  }
  if (key == 'D') {
    threshold++;
    console.log("Threshold is now: " + threshold);
  }
}


function Car() {
  this.x = width / 2;
  this.y = height / 2;
  this.angle = 0;
  this.artwork = car;
  this.dx = 0.0;
  this.dy = 0.0;

  this.moveRight = function() {
    this.angle += 3;
    this.dx = cos(radians(this.angle));
    this.dy = sin(radians(this.angle));
  }
  this.moveLeft = function() {
    this.angle -= 3;
    this.dx = cos(radians(this.angle));
    this.dy = sin(radians(this.angle));
  }

  this.move = function() {
    this.x += this.dx * 5;
    this.y += this.dy * 5;

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
  }

  this.display = function() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.angle));
    imageMode(CENTER);
    image(this.artwork, 0, 0, 50, 25);
    pop();
  }

}
