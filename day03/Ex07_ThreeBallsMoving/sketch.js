// keep track of the position of all three balls
let ballOneX = 0;
let ballTwoX = 0;
let ballThreeX = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  // erase the background
  background(255);

  // draw our three balls
  fill(255,0,0);
  ellipse(ballOneX, 150, 25, 25);

  fill(0,255,0);
  ellipse(ballTwoX, 250, 25, 25);

  fill(0,0,255);
  ellipse(ballThreeX, 350, 25, 25);

  // update the position of each ball using slightly
  // different values
  ballOneX += 1;
  ballTwoX += 2;
  ballThreeX += 3;
}

// a keypress will reset the system
function keyPressed() {
  ballOneX = 0;
  ballTwoX = 0;
  ballThreeX = 0;
}
