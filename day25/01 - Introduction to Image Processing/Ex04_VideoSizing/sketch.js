// 'capture' will be a reference to our video DOM element
let capture;

function setup() {
  createCanvas(640, 480);

  // create a new video capture instance
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

  // hide the element on the HTML document (we will choose how we want to display
  // it later in the 'draw' function)
  capture.hide();
}

function draw() {
  background(0);

  // draw the capture to the screen (it will function just like an image here)
  // use the mouse to control the width and height of the video
  image(capture, 0, 0, mouseX, mouseY);
}
