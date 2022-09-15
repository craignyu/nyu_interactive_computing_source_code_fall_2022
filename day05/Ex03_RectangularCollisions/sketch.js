// artwork
var mario, mario_blue;

// location of mario
var marioX, marioY;

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

  // compute the four sides of each character
  var marioRight = marioX + mario.width;
  var marioLeft  = marioX;
  var blueRight = mouseX + mario_blue.width;
  var blueLeft  = mouseX;
  var marioTop   = marioY;
  var marioBottom = marioY + mario.height;
  var blueTop    = mouseY;
  var blueBottom = mouseY + mario_blue.height;

  // deterine if a collision has occurred
  noStroke();
  if (marioRight < blueLeft || marioLeft > blueRight || marioBottom < blueTop || marioTop > blueBottom) {
    text ("NO COLLISION", 20, 20);
  }
  else {
    text ("COLLISION", 20, 20);
    background(255,0,0);
  }

  // draw our characters (mario has a defined position, blue mario is mouse controlled)
  image(mario, marioX, marioY);
  image(mario_blue, mouseX, mouseY);

  // visual debugging
  stroke(0,255,0);
  if (marioRight < blueLeft) {
    line(marioRight, marioTop, marioRight, marioBottom);
  }
  if (marioLeft > blueRight) {
    line(marioLeft, marioTop, marioLeft, marioBottom);
  }
  if (marioBottom < blueTop) {
    line(marioLeft, marioBottom, marioRight, marioBottom);
  }
  if (marioTop > blueBottom) {
    line(marioLeft, marioTop, marioRight, marioTop);
  }


}
