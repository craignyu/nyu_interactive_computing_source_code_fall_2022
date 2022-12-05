// our video object
let capture;

// an image object to "memorize" the previous frame of video
let compareFrame;

// a "merged" image object to show motion pixels
let mergedFrame;

// threshold to see how tolerant we should be
let threshold = 20;

// keep track of "motion" pixels
let leftChange = 0;
let rightChange = 0;

// keep track of our character's position
let characterX = 160;

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

  // create an empty image that will hold a previous frame of video
  compareFrame = createGraphics(320, 240);
  compareFrame.pixelDensity(1);

  // create an empty image that will hold the result of our motion detection algorithm
  mergedFrame = createGraphics(320, 240);
  mergedFrame.pixelDensity(1);
}

function draw() {
  // adjust threshold based on the mouse position
  threshold = map(mouseX, 0, width, 0, 100);

  // expose the pixels of each of our image objects
  capture.loadPixels();
  compareFrame.loadPixels();
  mergedFrame.loadPixels();

  // if we have a frame of video and we have a comparison frame we can attempt
  // to perform the background removal algorithm
  if (capture.pixels.length > 0 && compareFrame.pixels.length > 0) {

    // assume that we have no motion pixels
    leftChange = 0;
    rightChange = 0;

    // examine all pixels
    for (let x = 0; x < 320; x++) {
      for (let y = 0; y < 240; y++) {
        // compute 1D location here
        let location = int((x + y * 320) * 4);

        // see if this is a changed pixel

        // left side of the screen
        if (x < 50 && dist(capture.pixels[location], capture.pixels[location + 1], capture.pixels[location + 2], compareFrame.pixels[location], compareFrame.pixels[location + 1], compareFrame.pixels[location + 2]) > threshold) {
          leftChange += 1;
          mergedFrame.pixels[location] = 0;
          mergedFrame.pixels[location + 1] = 255;
          mergedFrame.pixels[location + 2] = 0;
          mergedFrame.pixels[location + 3] = 255;
        }

        // right side of the screen
        else if (x > 240 && dist(capture.pixels[location], capture.pixels[location + 1], capture.pixels[location + 2], compareFrame.pixels[location], compareFrame.pixels[location + 1], compareFrame.pixels[location + 2]) > threshold) {
          rightChange += 1;
          mergedFrame.pixels[location] = 0;
          mergedFrame.pixels[location + 1] = 255;
          mergedFrame.pixels[location + 2] = 0;
          mergedFrame.pixels[location + 3] = 255;
        } else {
          mergedFrame.pixels[location] = capture.pixels[location];
          mergedFrame.pixels[location + 1] = capture.pixels[location + 2];
          mergedFrame.pixels[location + 2] = capture.pixels[location + 2];
          mergedFrame.pixels[location + 3] = 255;
        }
      }
    }

    // update pixels and draw our merged frame
    mergedFrame.updatePixels();
    image(mergedFrame, 0, 0);

    // see if we have to move our character
    if (leftChange > 1000) {
      characterX -= 5;
    } else if (rightChange > 1000) {
      characterX += 5;
    }

    // draw our character
    fill(255);
    ellipse(characterX, height / 2, 25, 25);

    // important - this frame of video becomes our comparision frame for the next iteration of 'draw'
    compareFrame.image(capture, 0, 0, 320, 240);
  }

  // display threshold
  noStroke();
  fill(255);
  rect(0,0,100,30);
  fill(0);
  text("Threshold:" + int(threshold), 10, 20);
}

function mousePressed() {
  characterX = width/2;
  characterY = height/2;
}
