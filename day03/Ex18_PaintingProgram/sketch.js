function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0);
  fill(255);
}


function draw() {
  // only draw an ellipse when the mouse is pressed
  if (mouseIsPressed == true) {
    ellipse(mouseX, mouseY, 10, 10);
  }

}
