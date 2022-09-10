function setup() {
  createCanvas(500, 500);

  // no strokes on our shapes
  noStroke();
}

function keyPressed() {
  // save a copy of the canvas to an image file
  // note - you probably only want to perform one of these function calls!
  save('creation.png');   // PNG encoding, filename 'creation.png'
  //save('creation.jpg'); // JPEG encoding, filename 'creation.jpg'

  // also note - the behavior here is different in the IDE vs a browser
  // in the IDE the file will automatically save to the sketch folder
  // on the web it will cause a file download to occur to the user's download folder
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
