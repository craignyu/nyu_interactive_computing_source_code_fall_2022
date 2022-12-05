// video capture object
let capture;

// color we want to track
let r = 0;
let g = 0;
let b = 0;

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
    let bestMatch = 1000;
    let bestLocation = -1;

    for (let i = 0; i < capture.pixels.length; i += 4) {
      // determine how close of a match this color is to our desired color
      let match = dist(r, g, b, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match < bestMatch) {
        bestMatch = match;
        bestLocation = i;
      }
    }

    // draw the video
    image(capture, 0, 0);

    // now we know the best match!  draw a box around it
    let xPos = (bestLocation / 4) % 320;
    let yPos = (bestLocation / 4) / 320;
    rect(xPos, yPos, 25, 25);
  }
}

function mousePressed() {
  // memorize the color the user is clicking on
  r = red(get(mouseX,mouseY));
  g = green(get(mouseX,mouseY));
  b = blue(get(mouseX,mouseY));

  console.log("Looking for: R=" + r + "; G=" + g + "; B=" + b);
}
