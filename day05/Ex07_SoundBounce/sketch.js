// our sound effect
var boing;

// position of our character
var xPos, yPos;

// direction for our character
var xDir, yDir;

// preload our sound
function preload() {
  boing = loadSound("boing.mp3");
}

function setup() {
  createCanvas(500, 500);
  
  // set the character to start in the middle of the screen
  xPos = 250;
  yPos = 250;
  
  // give the character an initial starting direction
  xDir = -2;
  yDir = -1;
}

function draw() {
  background(0);
  
  // move the character
  xPos += xDir;
  yPos += yDir;
  
  // bounce, if necessary
  if (xPos > width || xPos < 0) {
    xDir *= -1;
    // trigger our sound
    boing.play();
  }
  if (yPos > height || yPos < 0) {
    yDir *= -1;
    // trigger our sound
    boing.play();
  }
  
  // draw our character
  fill(255);
  ellipse(xPos, yPos, 25, 25);
}