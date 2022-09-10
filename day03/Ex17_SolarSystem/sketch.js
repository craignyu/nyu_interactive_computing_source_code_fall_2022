// angle variable to keep track of rotation
let angleMercury = 0
let angleVenus = 0
let angleEarth = 0

function setup() {
  createCanvas(500, 500);

  // no strokes on our shapes
  noStroke();
}


function draw() {
  // erase the background of the canvas
  background(0)

  // draw the sun
  fill(255,255,0)
  ellipse(250,250,100,100);

  // MERCURY

  // store the current drawing matrix
  push()

  // move the origin to the middle of the sun
  translate(250, 250);

  // rotate using our angle variable for mercury
  rotate( radians(angleMercury) )

  // draw mercury here
  fill(128)
  ellipse(100,0,25,25)

  // restore the previous drawing matrix
  pop()

  // update the angle variable for the next draw cycle
  angleMercury += 5




  // VENUS

  // store the current drawing matrix
  push()

  // move the origin to the middle of the sun
  translate(250, 250);

  // rotate using our angle variable for mercury
  rotate( radians(angleVenus) )

  // draw venus here
  fill(0,255,0)
  ellipse(150,0,35,35)

  // restore the previous drawing matrix
  pop()

  // update the angle variable for the next draw cycle
  angleVenus += 3



  // EARTH

  // store the current drawing matrix
  push()

  // move the origin to the middle of the sun
  translate(250, 250);

  // rotate using our angle variable for mercury
  rotate( radians(angleEarth) )

  // draw earth here
  fill(0,0,255)
  ellipse(200,0,35,35)

  // restore the previous drawing matrix
  pop()

  // update the angle variable for the next draw cycle
  angleEarth += 1  
}
