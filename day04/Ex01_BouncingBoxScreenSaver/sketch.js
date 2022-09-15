// keep track of box position
let xPos = 250;
let yPos = 250;

// keep track of box speed
let xSpeed = 1;
let ySpeed = 2;

// keep track of box color
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(500, 500);
  fill(255);
}

function draw() {
  background(0);

  // draw our box
  fill(r,g,b);
  rect(xPos, yPos, 50, 50);

  // draw our 'DVD' text - dark box fills should result
  // in white text and light box fills should result in
  // black text
  if ((r+g+b)/3 >= 128) {
    fill(0);
  }
  else {
    fill(255);
  }
  // align text horizontally centered / vertically centered
  textAlign(CENTER, CENTER);
  text("DVD", xPos+25, yPos+25);

  // move our box
  xPos += xSpeed;
  yPos += ySpeed;

  // did the box hit the left or right edge?
  if (xPos > width-50 || xPos < 0) {
    // if so, reverse the box speed (so that next time it will be moving
    // in the opposite direction)
    xSpeed *= -1;

    // change the box color
    r = random(255);
    g = random(255);
    b = random(255);
  }

  // did the box hit the top or bottom edge?
  if (yPos > height-50 || yPos < 0) {
    // if so, reverse the box speed (so that next time it will be moving
    // in the opposite direction)
    ySpeed *= -1;

    // change the box color
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
