// video capture object
let capture;

// colors we want to track
let r1 = 0;
let g1 = 0;
let b1 = 0;

let r2 = 0;
let g2 = 0;
let b2 = 0;

// keep track of which color we are currently going to set (the user will click to
// set color #1 and then click again to set color #2)
let currentColor = 1;

// what is our current threshold?  This is how sensitve our color detection algorithm should be
// low numbers means more sensitivity, high numbers mean less sensitivity (aka false positives)
let threshold = 20;

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

  stroke(0, 255, 0);
  noFill();
  rectMode(CENTER);
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
      let xPos1 = xSum / bestLocations1.length;
      let yPos1 = ySum / bestLocations1.length;

      // now we know the best match!  draw a box around it
      stroke(0,255,0);
      noFill();
      rectMode(CENTER);
      rect(xPos1, yPos1, 25, 25);
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
      let xPos2 = xSum / bestLocations2.length;
      let yPos2 = ySum / bestLocations2.length;

      // now we know the best match!  draw a box around it
      stroke(255,0,0);
      noFill();
      rectMode(CENTER);
      rect(xPos2, yPos2, 25, 25);
    }

  }

  // display threshold
  noStroke();
  fill(255);
  rectMode(CORNER);
  rect(0,0,220,30);
  fill(0);
  text("Threshold:" + int(threshold) + " - hit 'A' and 'D' to adjust", 10, 20);
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
  }
  else if (currentColor == 2) {
    r2 = capture.pixels[loc];
    g2 = capture.pixels[loc + 1];
    b2 = capture.pixels[loc + 2];

    console.log("Color 2 - Looking for: R=" + r2 + "; G=" + g2 + "; B=" + b2);
    currentColor = 1;
  }
}

function keyPressed() {
  if (key == 'A' || key == 'a') {
    threshold--;
    console.log("Threshold is now: " + threshold);
  }
  if (key == 'D' || key == 'd') {
    threshold++;
    console.log("Threshold is now: " + threshold);
  }
}
