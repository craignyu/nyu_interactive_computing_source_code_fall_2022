// video capture object
let capture;

// four slices for our video
let s1, s2, s3, s4;

function setup() {
  createCanvas(640, 480);

  // start up our video and hide the DOM element
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

  // create four holder images
  s1 = createGraphics(160,120);
  s2 = createGraphics(160,120);
  s3 = createGraphics(160,120);
  s4 = createGraphics(160,120);
}

function draw() {
  background(0);

  // slice up the video in real-time!

  // first make sure the video is actually loaded and ready to go
  capture.loadPixels();
  if (capture.pixels.length > 0) {

    // ask the slices to copy over their assigned portions of the video
    s1.copy(capture, 0, 0, 160, 120, 0, 0, 160, 120);
    s2.copy(capture, 160, 0, 160, 120, 0, 0, 160, 120);
    s3.copy(capture, 0, 120, 160, 120, 0, 0, 160, 120);
    s4.copy(capture, 160, 120, 160, 120, 0, 0, 160, 120);

    // draw the images using an offset pattern
    imageMode(CENTER);
    image(s1, mouseX, mouseY);
    image(s2, width - mouseX, mouseY);
    image(s3, mouseX, height - mouseY);
    image(s4, width - mouseX, height - mouseY);
  }
}
