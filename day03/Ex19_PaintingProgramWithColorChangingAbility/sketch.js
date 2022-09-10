// store our current color values
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0);

  // draw our color indicator label
  fill(255);
  text("Color:", 25, 25);

  // draw our current color block
  fill(r,g,b);
  rect(75, 10, 25, 25);
}

function draw() {

  // only draw an ellipse when the mouse is pressed
  if (mouseIsPressed == true) {

    // draw using our defined color
    stroke(r,g,b);
    strokeWeight(5)

    // draw the ellipse
    line(mouseX, mouseY, pmouseX, pmouseY)
  }

}

function keyPressed() {
  // if the 'C' key is pressed we should pick a random color
  console.log(key)
  if (key == 'C' || key == 'c') {
    r = random(255);
    g = random(255);
    b = random(255);

    // redraw our color indicator
    fill(r,g,b);
    noStroke()
    rect(75, 10, 25, 25);
  }
}
