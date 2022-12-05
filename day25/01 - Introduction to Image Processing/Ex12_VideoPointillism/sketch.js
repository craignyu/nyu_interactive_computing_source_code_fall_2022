// video object
let capture;

function setup() {
  pixelDensity(1);
  createCanvas(640, 480);

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
  // first make sure the video is actually loaded and ready to go
  capture.loadPixels();
  if (capture.pixels.length > 0) {

    // pick 500 random pixels
    for (let i = 0; i < 500; i++) {
      // pick a random x & y position
      let x = int(random(0,320));
      let y = int(random(0,240));

      // now convert these values into pixel array locations
      let location = (x + y * capture.width) * 4;

      // use the color here to draw an ellipse
      fill(capture.pixels[location], capture.pixels[location+1], capture.pixels[location+2]);
      ellipse(x, y, 5, 5);
    }
  }
}
