// setup function - used for commands that need to run only once
function setup()
{
  // only put code here that you want to happen one time,
  // at the start of your program

  // create a canvas element on the page
  createCanvas(250, 250);

  // draw our house
  line(50, 200, 50, 100);
  line(50, 100, 125, 50);
  line(125, 50, 200, 100);
  line(200, 100, 200, 200);
  line(200, 200, 50, 200);

  // draw the moon
  ellipse(225, 25, 25, 25);

  // random rectangle - maybe a door for our house?
  rect(100, 150, 50, 50);
}

// draw function - used for commands that need to be repeated
function draw()
{
}
