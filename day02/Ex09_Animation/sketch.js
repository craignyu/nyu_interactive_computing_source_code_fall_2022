// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time, 
  // at the start of your program

  // create a canvas element on the page
  createCanvas(400, 400);
}

// draw function - used for commands that need to be repeated
function draw()
{
  // draw an ellipse
  ellipse(mouseX, mouseY, 100, 100);
}
		