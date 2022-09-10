// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time,
  // at the start of your program

  // create a canvas element on the page
  createCanvas(400,400);

  // don't draw any "strokes" on our shapes
  noStroke();

  // turn off the mouse cursor
  noCursor();

  // set a red fill
  fill(255,0,0);

  // start with an opaque black background
  background(0);
}

// draw function - this is our 'game' loop that automatically
// executes over and over
function draw()
{
  // erase the background
  background(0, 0, 0, 10);

  // draw an ellipse where the mouse is
  ellipse(mouseX, mouseY, 50, 50);
}
