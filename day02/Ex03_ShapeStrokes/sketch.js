// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time, 
  // at the start of your program

  // create a canvas element on the page
  createCanvas(500, 500);

  // fill in shapes with a white color (instead of black, which is the default fill color)
  fill(255);
  
  // set up a thick stroke weight so we can see the demo below
  strokeWeight(10);
  
  // strokeJoin affects the edges of connected shapes
  // strokeJoin options: ROUND, BEVEL, MITER (default)
  strokeJoin(ROUND);
  rect(50, 50, 50, 50);

  strokeJoin(BEVEL);
  rect(150, 50, 50, 50);

  strokeJoin(MITER);
  rect(250, 50, 50, 50);
  
  // strokeCap affects the edges of unconnected shapes
  // strokeCap options: SQUARE, PROJECT, ROUND (default)
  strokeCap(SQUARE);
  line(50, 250, 100, 250);

  strokeCap(PROJECT);
  line(150, 250, 200, 250);

  strokeCap(ROUND);
  line(250, 250, 300, 250);
  
  // demo of both techniques
  strokeCap(SQUARE);
  strokeJoin(BEVEL);
  beginShape();
  vertex(50, 350);
  vertex(100, 350);
  vertex(100, 375);
  endShape();

}

// draw function - used for commands that need to be repeated
function draw()
{
}
		
		