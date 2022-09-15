// the character's current position
let xPos, yPos;

// the character's desired position
let xDesired, yDesired;

function setup() {
  createCanvas(500, 500);

  // default the character to the middle of the screen
  xPos = 250;
  yPos = 250;

  // default the character to want to move to the middle of the screen
  xDesired = 250;
  yDesired = 250;

  noStroke();
}

function draw() {
  // erase the background
  background(0, 10);

  // compute the distance between the character and the desired location
  let distX = xDesired - xPos;
  let distY = yDesired - yPos;

  // move 5% of the way toward the desired position
  xPos += 0.05 * distX;
  yPos += 0.05 * distY;

  // draw the "desired" location
  fill(0,255,0);
  ellipse(xDesired, yDesired, 10, 10);

  // draw the "character" at its current position
  fill(255);
  ellipse(xPos, yPos, 25, 25);
}

function mousePressed() {
  // set a new desired position for the character
  xDesired = mouseX;
  yDesired = mouseY;
}
