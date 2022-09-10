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

    // make sure that we aren't painting at the top of the screen
    if (mouseY > 50) {
      // draw using our defined color
      stroke(r,g,b);
      strokeWeight(5)

      // draw the ellipse
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
  }

}

function keyPressed() {
  // if the 'X' key is pressed we should erase the background
  if (key == 'X' || key == 'x') {
    background(0);

    // also re-draw the color indicator
    noStroke()
    fill(255);
    text("Color:", 25, 25);
    fill(r,g,b);
    rect(75, 10, 25, 25);
  }

  // if the 'P' key is pressed we should print our work
  else if (key == 'P' || key == 'p') {
    print();
  }

  // if the 'S' key is pressed we should save our work
  else if (key == 'S' || key == 's') {
    save('masterpiece.png');
  }

  // if the 'C' key is pressed we should pick a random color
  else if (key == 'C' || key == 'c') {
    r = random(255);
    g = random(255);
    b = random(255);

    // redraw our color indicator
    fill(r,g,b);
    noStroke()
    rect(75, 10, 25, 25);
  }
}
