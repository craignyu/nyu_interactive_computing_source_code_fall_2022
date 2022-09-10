// angle variable to keep track of rotation
let angle = 0

function setup() {
  createCanvas(500, 500);

  // no strokes on our shapes
  noStroke();
}


function draw() {
  // erase the background of the canvas
  background(0)

  // store the current drawing matrix
  push()

  // move the origin to where the mouse is
  translate(mouseX, mouseY);

  // rotate using our angle variable
  rotate( radians(angle) )

  // draw our rectangle here
  rectMode(CENTER)
  rect(0,0,100,100)

  // restore the previous drawing matrix
  pop()

  // update the angle variable for the next draw cycle
  angle += 1
}
