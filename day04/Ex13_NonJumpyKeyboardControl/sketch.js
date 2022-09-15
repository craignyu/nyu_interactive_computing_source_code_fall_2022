// character position
let xPos, yPos ;

function setup() {
  createCanvas(500, 500);

  // default position to the middle of the screen
  xPos = 250;
  yPos = 250;

  fill(255);
  noStroke();
}

function draw() {
  background(0);

  text ("Position: " + xPos + ", " + yPos, 20, 20);

  // move left?
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    xPos -= 2
  }
  // move right?
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    xPos += 2
  }
  // move up?
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    yPos -= 2
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    yPos += 2
  }

  // wrap around logic
  if (xPos > width) {
    xPos = 0;
  }
  if (xPos < 0) {
    xPos = width;
  }
  if (yPos > height) {
    yPos = 0;
  }
  if (yPos < 0) {
    yPos = height;
  }

  // draw the character
  ellipse(xPos, yPos, 25, 25);
}
