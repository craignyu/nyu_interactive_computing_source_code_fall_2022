// setup function - used for commands that need to run only once
function setup()
{	
  // only put code here that you want to happen one time, 
  // at the start of your program

  // create a canvas element on the page
  createCanvas(400, 400);
  
  // fill with black
  fill(0);

  // draw ellipse #1
  ellipse(50,50, 25, 25);

  // now fill with grey
  fill(128);

  // draw ellipse #2
  ellipse(100,100, 25, 25);

  // draw ellipse #3 – it will 
  // also be grey!
  ellipse(150, 150, 25, 25);

  // ellipse #4 will be white
  fill(255);
  ellipse(200, 200, 25, 25);

  // ellipse #5 will be white as well
  ellipse(250, 250, 25, 25);

  // and so will ellipse #6!
  ellipse(300, 300, 25, 25);

  // ellipse #7 will be black
  fill(0);
  ellipse(350, 350, 25, 25);
}

// draw function - used for commands that need to be repeated
function draw()
{
}		
		