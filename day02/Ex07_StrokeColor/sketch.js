// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time, 
  // at the start of your program

  // create a canvas element on the page
  createCanvas(400, 400);
  
  // thickness
  strokeWeight(10);

  // no fill
  noFill();

  // outlines will be semi transparent red 
  stroke(255,0,0,128);

  // draw our shapes
  ellipse(100,100,50,50);
  ellipse(110,110,50,50);
}

// draw function - used for commands that need to be repeated
function draw()
{
}
		