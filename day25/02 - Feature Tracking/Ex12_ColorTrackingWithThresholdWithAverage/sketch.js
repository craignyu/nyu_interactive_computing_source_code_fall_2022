// video capture object
let capture;

// color we want to track
let r = 0;
let g = 0;
let b = 0;

// scaling factor (how much are we increasing the size of video by to draw it?)
let scalingFactor = 2;

// our sensitivity threshold
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

    // draw the video
    image(capture, 0, 0);

    // set up variables to test for the best pixel
    let bestLocations = [];

    for (let i = 0; i < capture.pixels.length; i += 4) {
      // determine how close of a match this color is to our desired color
      let match = dist(r, g, b, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match < threshold) {
        // this pixel qualifies!  store its location into our array
        bestLocations.push(i);
      }
    }

    // do we have a best match?  it's possible that no pixels met our threshold
    if (bestLocations.length > 0) {
      // average up all of our locations
      let xSum = 0;
      let ySum = 0;

      // visual indicator of our 'good' pixels
      stroke(0,255,0);
      strokeWeight(1);

      for (let i = 0; i < bestLocations.length; i++) {
        point((bestLocations[i] / 4) % 320, (bestLocations[i] / 4) / 320)
        xSum += (bestLocations[i] / 4) % 320;
        ySum += (bestLocations[i] / 4) / 320;
      }

      // average our sums to get our 'centroid' point
      let xPos = xSum / bestLocations.length;
      let yPos = ySum / bestLocations.length;

      // now we know the best match!  draw a box around it
      stroke(255,0,0);
      strokeWeight(10);
      noFill();
      rectMode(CENTER);
      rect(xPos, yPos, 50, 50);
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
