function setup() {
  createCanvas(500, 500);
  
  // start off by texting a simple message to the center of the screen
  fill(0);
  textAlign(CENTER);
  text("No input has been detected yet ...", 250, 250);
}

function draw() {
}

// this function runs every time ANY key is pressed
function keyPressed() {
  background(0,255,0);
  text("A key was pressed!", 250, 250);
}

// this function runs every time the left mouse button is pressed
function mousePressed() {
  background(128);
  text("The mouse was pressed!", 250, 250);
}