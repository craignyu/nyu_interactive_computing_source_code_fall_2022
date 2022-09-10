function setup() {
  createCanvas(200,200);
}

function draw() {
  // draw our ellipses based on the 'width' variable which
  // reports the current width of the canvas element we are
  // working with
  ellipse(width/4, height/2, 25, 25);
  ellipse(width/2, height/2, 25, 25);
  ellipse(width/4*3, height/2, 25, 25);
}