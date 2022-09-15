// character position
let xPos, yPos;

function setup() {
  createCanvas(500, 500);

  // default the character to the middle of the screen
  xPos = 250;
  yPos = 250;

  fill(255);
  noStroke();
}

function draw() {
  background(0);

  // draw the character
  ellipse(xPos, yPos, 25, 25);
}

function keyPressed() {
  // move left?
  if (key == 'A') {
    xPos -= 15;
  }
  // move right?
  if (key == 'D') {
    xPos += 15;
  }
  // move up?
  if (key == 'W') {
    yPos -= 15;
  }
  if (key == 'S') {
    yPos += 15;
  }

  // same logic, but for the arrow keys
  if (keyCode == LEFT_ARROW) {
    xPos -= 15;
  }
  if (keyCode == RIGHT_ARROW) {
    xPos += 15;
  }
  if (keyCode == UP_ARROW) {
    yPos -= 15;
  }
  if (keyCode == DOWN_ARROW) {
    yPos += 15;
  }
}
