function setup()
{
  // create our canvas
  createCanvas(500, 500);

  // set a white color for our shape fills
  fill(255);
  
  // turn off the cursor
  noCursor();
  
  // draw rectangles from their center points
  rectMode(CENTER);
}

// draw function - used for commands that need to be repeated
function draw()
{
  // draw a semi-transparent black background on top of everything
  background(0, 10);
  
  // draw a rectangle at the mouse position
  rect(mouseX, mouseY, 25, 25);
}

// this function runs one time every time the mouse is pressed
function mousePressed()
{
  // draw an ellipse
  ellipse(mouseX, mouseY, 50, 50);
}
		