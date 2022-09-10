function setup()
{
  // create our canvas
  createCanvas(500, 500);

  // memorize the current canvas drawing state (origin point, rotation, etc.)
  push()

  // move the origin to the center of the screen
  translate(250, 250)

  // now everything we draw will be relative to the center of the screen (250,250)

  // rotate by 45 degrees
  rotate( radians(45) )

  // draw a box here based on its center point
  rectMode(CENTER)
  rect(0, 0, 100, 100)

  // restore the previous canvas drawing state
  pop()
}

// draw function - used for commands that need to be repeated
function draw()
{

}
