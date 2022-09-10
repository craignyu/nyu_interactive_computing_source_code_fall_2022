// keep track of the "blueness" and "redness" for our shapes
let blueNess = 0;
let redNess = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  // draw our square using the "redNess" variable to dictate how much
  // red color to use
  fill(redNess, 0, 0);
  rect(0,0,250,250);

  // draw our ellipse using the "blueNess" variable to dictate how much
  // blue color to use
  fill(0, 0, blueNess);
  ellipse(375, 375, 250, 250);
}

function keyPressed() {
  // increase blueNess and redNess
  blueNess += 10;
  redNess += 10;
}
