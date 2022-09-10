function setup() {
  createCanvas(500, 500);
  
  // start by filling with a black color
  fill(0);
  
  // no strokes on our shapes
  noStroke();
}

function draw() {
  // draw an ellipse
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
  // fill with green from now on
  fill(0,255,0);
}

function mousePressed() {
  // fill with red from now on
  fill(255,0,0);
}