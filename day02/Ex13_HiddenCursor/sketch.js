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
}

// draw function - this is our 'game' loop that automatically
// executes over and over
function draw()
{
  // erase the background
  background(255);

  // set a red fill
  fill(255,0,0);

  // draw an ellipse where the mouse is
  ellipse(mouseX, mouseY, 50, 50);

  // set a black fill
  fill(0);

  // report the position of the mouse
  text(int(mouseX)+","+int(mouseY), mouseX+50, mouseY+50);
}
