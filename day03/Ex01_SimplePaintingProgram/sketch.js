function setup()
{
  // create our canvas
  createCanvas(500, 500);

  // set a medium grey fill and turn off shape strokes  
  fill(128);
  noStroke();
}

// draw function - used for commands that need to be repeated
function draw()
{
  // draw an ellipse at the mouse position
  ellipse(mouseX, mouseY, 25, 25);
}

// this function runs one time every time the mouse is pressed
function mousePressed()
{
  // clear the canvas
  background(255);
}
		