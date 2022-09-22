// position & dimensions of our character
let xPos = 225;
let yPos = 350;
let size = 50;

// keep track of the floor (we shouldn't fall through the floor!)
let floorY = 400;

// jumping power -- this is how fast we should be moving up into the air when jumping
let jumpMode = false;
let jumpPower = 0;

// gravity -- this will slightly reduce jump power every frame, eventually causing our
// character to fall back to the ground
const gravity = 0.2;

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  background(0);

  // movement mechanics - left and right
  if (keyIsDown(LEFT_ARROW)) {
    xPos -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xPos += 3;
  }

  // movement mechanics - initiate a jump
  if (keyIsDown(UP_ARROW) && jumpMode === false) {
    jumpMode = true
    jumpPower = -5
  }

  // handle jumping
  if (jumpMode) {
    // adjust y position of character based on jumpPower
    yPos += jumpPower;

    // degrade jump power slightly using gravity
    jumpPower += gravity;

    // did we go through the floor?  if so, stop jumping and put the player onto the floor
    if (yPos+size >= floorY) {
      jumpMode = false;
      jumpPower = 0;
      yPos = floorY - size;
    }
  }

  // draw our character
  fill(200);
  rect(xPos, yPos, size, size);

  // draw our floor
  fill(128);
  rect(0,floorY,width,height);
}
