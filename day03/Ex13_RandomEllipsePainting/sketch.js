function setup() {
  createCanvas(500, 500);

  // no strokes on our shapes
  noStroke();
}

function draw() {
  // pick a random size for this ellipse
  let size = random(5,25);

  // also pick some random colors for this ellipse
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // transparency (we want all ellipses to be visible so the range changes a bit)
  let a = random(25,255);

  // set up our new color
  fill(r,g,b,a);

  // draw an ellipse here
  ellipse(mouseX, mouseY, size, size);
}
