// our video object
let capture;

// threshold to see how tolerant we should be
let threshold = 20;

// keep track of our brightest location in our 1D array
let brightestLocation = 0;

// keep track of the brightest value in our 1D array
let brightestValue = 0;

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

  noFill();
  stroke(0,255,0);
  strokeWeight(5);
  rectMode(CENTER);
}

function draw() {
  // adjust threshold based on the mouse position
  threshold = map(mouseX, 0, width, 0, 100);

  // expose the pixel array in our video stream
  capture.loadPixels();

  // continue if we have pixels to analyze
  if (capture.pixels.length > 0) {

    // reset our brightest pixels
    brightestLocation = 0;
    brightestValue = -1000;

    // examine all pixels and find a brighter one
    for (let i = 0; i < capture.pixels.length; i+=4) {
      // compute brightness
      let b = (capture.pixels[i] + capture.pixels[i + 1] + capture.pixels[i + 2]) / 3;
      if (b > brightestValue) {
        brightestValue = b;
        brightestLocation = i;
      }
    }

    // draw our video
    image(capture, 0, 0);

    // now draw a box around our brightest location
    let xLoc = (brightestLocation/4) % 320;
    let yLoc = (brightestLocation/4) / 320;
    rect(xLoc, yLoc, 25, 25);
  }
}
