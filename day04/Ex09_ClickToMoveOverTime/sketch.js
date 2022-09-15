// the character's current position
let xPos, yPos;

// the character's desired position
let xDesired, yDesired;

// speed value - how quickly should we move to the desired position
let speed = 2;

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
  background(0);

  // see if we need to move the character

  // step 1: is the charater close enough to the desired position?  if so,
  // just nudge them into position
  if (abs(xPos - xDesired) < speed) {
    xPos = xDesired;
  }
  // otherwise see if we have to move left or right
  else {
    if (xDesired > xPos) {
      xPos += speed;
    }
    else {
      xPos -= speed;
    }
  }

  // step 1: nudge into the correct y position?
  if (abs(yPos - yDesired) < speed) {
    yPos = yDesired;
  }

  else {
    // move up or down
    if (yDesired > yPos) {
      yPos += speed;
    }
    else if (yDesired < yPos) {
      yPos -= speed;
    }
  }

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
