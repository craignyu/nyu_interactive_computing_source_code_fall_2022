// variables to hold a buffer
let buffer1;

function setup() {
  createCanvas(500,500);
  background(128);

  // create a buffer that's 1/4 the size of the canvas
  buffer1 = createGraphics(250,250);
}

function draw() {
  background(128);

  // draw an ellipse on our off screen buffer at a random spot
  buffer1.fill(random(255));
  buffer1.ellipse(random(500), random(500), 10, 10);

  // draw the buffer wherever the mouse is
  image(buffer1, mouseX, mouseY);
}

function mousePressed() {
  // erase the buffer (sets all pixels to transparent)
  buffer1.clear();
}
