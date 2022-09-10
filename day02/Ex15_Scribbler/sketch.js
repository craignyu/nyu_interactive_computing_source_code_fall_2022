// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time, 
  // at the start of your program

  // create a canvas element on the page
  createCanvas(400,400);
}

// draw function - this is our 'game' loop that automatically 
// executes over and over
function draw()
{
  line(pmouseX, pmouseY, mouseX, mouseY);
}