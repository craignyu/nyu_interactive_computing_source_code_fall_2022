// video capture object
let capture;

// color we want to track
let r = 0;
let g = 0;
let b = 0;

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
      if (match < threshold && match < bestMatch) {
        bestMatch = match;
        bestLocation = i;
      }
    }

    // draw the video
    image(capture, 0, 0);

    // do we have a best match?  it's possible that no pixels met our threshold
    if (bestLocation != -1) {
      // now we know the best match!  draw a box around it
      let xPos = (bestLocation / 4) % 320;
      let yPos = (bestLocation / 4) / 320;

      rectMode(CENTER);
      stroke(0,255,0);
      noFill();
      rect(xPos, yPos, 25, 25);
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
  r = red(get(mouseX,mouseY));
  g = green(get(mouseX,mouseY));
  b = blue(get(mouseX,mouseY));

  console.log("Looking for: R=" + r + "; G=" + g + "; B=" + b);
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
