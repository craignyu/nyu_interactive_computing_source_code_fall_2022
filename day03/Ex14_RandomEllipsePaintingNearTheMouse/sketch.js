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

  // pick a position near the mouse
  let xPos = random(mouseX-20, mouseX+20);
  let yPos = random(mouseY-20, mouseY+20);

  // draw an ellipse here
  ellipse(xPos, yPos, size, size);
}
