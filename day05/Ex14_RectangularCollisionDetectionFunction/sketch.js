// artwork
let mario, mario_blue;

// location of mario
let marioX, marioY;

// preload artwork
function preload() {
  mario = loadImage("mario.png");
  mario_blue  = loadImage("mario_blue.png");
}

function setup() {
  createCanvas(500, 500);
  noCursor();

  // define mario's position
  marioX = 250 - 0.5 * mario.width;
  marioY = 250 - 0.5 * mario.height;

  // set global fill color
  fill(255);
}

function draw() {
  background(0);

  // deterine if a collision has occurred
  noStroke();
  if ( checkCollision(marioX, marioY, mario.width, mario.height, mouseX, mouseY, mario_blue.width, mario_blue.height) ) {
    text ("COLLISION", 20, 20);
    background(255,0,0);
  }
  else {
    text ("NO COLLISION", 20, 20);
  }

  // draw our characters (mario has a defined position, blue mario is mouse controlled)
  image(mario, marioX, marioY);
  image(mario_blue, mouseX, mouseY);
}


// generic function to compute whether two rectangles interset with one another
function checkCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
  // rectangle 1 is to the left of rectangle #2
  if (x1+w1 < x2) {
    console.log("LEFT");
    return false;
  }
  // rectangle 1 is to the right of rectangle #2
  if (x1 > x2+w2) {
    console.log("RIGHT");
    return false;
  }
  // rectangle 1 is above rectangle #2
  if (y1+h1 < y2) {
    console.log("ABOVE");
    return false;
  }
  // rectangle 1 is below rectangle #2
  if (y1 > y2+h2) {
    console.log("BELOW");
    return false;
  }

  // if we got here we failed all of the tests above - the rectangles
  // must be intersecting
  return true;
}
