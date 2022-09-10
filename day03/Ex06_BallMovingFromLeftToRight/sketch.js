// create a variable to store the current x position of our ball
let ballX = 0;

function setup() {
  createCanvas(500, 500);

  // fill our shapes using a green color
  fill(0,255,0);
}

function draw() {
  // draw our ball based on the contents of the ballX variable
  ellipse(ballX, 250, 25, 25);

  // increase the ball's x position by a few pixels
  ballX += 2;
}

function keyPressed() {
  // erase the screen
  background(255);

  // reset the ball position
  ballX = 0;
}
