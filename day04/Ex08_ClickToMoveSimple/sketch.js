let xPos, yPos;

function setup() {
  createCanvas(500, 500);

  // default the character to the middle of the screen
  xPos = 250;
  yPos = 250;
}

function draw() {
  // erase the background
  background(0);

  // draw the "character" at its current position
  fill(255);
  ellipse(xPos, yPos, 25, 25);
}

function mousePressed() {
  // set a new position for the character
  xPos = mouseX;
  yPos = mouseY;
}
