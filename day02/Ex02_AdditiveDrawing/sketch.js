// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time,
  // at the start of your program

  // create a canvas element on the page
  createCanvas(250, 250);

  // fill in shapes with a white color (instead of black, which is the default fill color)
  fill(255);

  // draw an ellipse first
  ellipse(125, 125, 100, 100);

  // draw a rectangle on top of the ellipse
  rect(125, 125, 100, 100);
}

// draw function - used for commands that need to be repeated
function draw()
{
}
