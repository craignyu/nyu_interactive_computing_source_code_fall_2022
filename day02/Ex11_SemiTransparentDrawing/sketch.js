// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time, 
  // at the start of your program

  // create a canvas element on the page
  createCanvas(400,400);
  
  // don't draw any "strokes" on our shapes
  noStroke();

  // set up our "fill" color to be semi-transparent
  fill(0, 0, 255, 10);
}

// draw function - this is our 'game' loop that automatically 
// executes over and over
function draw()
{
  // draw an ellipse where the mouse is
  ellipse(mouseX, mouseY, 25, 25);
}
		