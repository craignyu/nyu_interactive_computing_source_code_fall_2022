// artwork for our character
let ghostLeft, ghostRight;

// current image file
let ghostCurrent;

// character position
let xPos, yPos;

// character direction
let xDir, yDir;

// load in all artwork
function preload() {
  ghostLeft = loadImage("ghost_left.png");
  ghostRight = loadImage("ghost_right.png");
}

function setup() {
  createCanvas(500, 500);

  // default our character to the middle of the screen
  xPos = 250;
  yPos = 250;

  // default our character to move to the right and up
  xDir = 2;
  yDir = 1.5;

  // set our current image to be the right facing one
  ghostCurrent = ghostRight;

  // draw all images from the center
  imageMode(CENTER);
}

function draw() {
  // erase the background
  background(0);

  // move the ghost
  xPos += xDir;
  yPos += yDir;

  // did the ghost bounce?
  if (xPos > width-50) {
    xDir *= -1;

    // switch artwork
    ghostCurrent = ghostLeft;
  }
  if (xPos < 50) {
    xDir *= -1;

    // switch artwork
    ghostCurrent = ghostRight;
  }

  // up and down bouncing
  if (yPos > height-50 || yPos < 50) {
    yDir *= -1;

    // no artwork changes necessary
  }

  // draw the ghost
  image(ghostCurrent, xPos, yPos);
}
