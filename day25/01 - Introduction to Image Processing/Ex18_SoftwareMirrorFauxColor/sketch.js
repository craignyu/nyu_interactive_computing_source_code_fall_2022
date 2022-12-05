// our video object
let capture;

// rotation angle
let angle = 0;

function setup() {
  pixelDensity(1);
  createCanvas(500, 500);

  // start up our video
  // start up our video
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

  noStroke();
}

function draw() {
  // erase the bg
  background(255);

  // expose the pixels in the video
  capture.loadPixels();

  // make sure we have pixels to work with
  if (capture.pixels.length > 0) {

    // how big should our boxes be?
    let boxSize = int(map(mouseX, 0, width, 10, 50));

    // iterate over every pixel in the image
    for (let x = 0; x < capture.width; x += boxSize) {
      for (let y = 0; y < capture.height; y += boxSize) {
        // compute the location in 1D space
        i = (x + y * capture.width) * 4;

        // grab the r, g & b values to make things easier
        let r = capture.pixels[i];
        let g = capture.pixels[i + 1];
        let b = capture.pixels[i + 2];

        // pick a color based on brightness
        if (r + g + b > 380) {
          // white
          fill(255);
        }
        else {
          // blue
          fill(0,0,255);
        }

        // draw a box here
        push();
        translate(x,y);
        rotate(radians(angle));
        rect(0,0,boxSize,boxSize);
        pop();
      }
    }
  }

  angle += 1;
}
