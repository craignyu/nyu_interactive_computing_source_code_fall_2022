// character position
var xPos, yPos ;

// character speed
var xSpeed, ySpeed;

// acceleration value (something VERY small)
var accel = 0.1;

function setup() {
  createCanvas(500, 500);
  
  // default position to the middle of the screen
  xPos = 250;
  yPos = 250;
  
  // default speed to 0
  xSpeed = 0;
  ySpeed = 0;

  fill(255);
  noStroke();
}

function draw() {
  background(0);
  
  text ("Position: " + round(xPos*100)/100 + ", " + round(yPos*100)/100, 20, 20);
  text ("Speed: " + round(xSpeed*100)/100 + ", " + round(ySpeed*100)/100, 20, 40);
  
  // move left?
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    // subtract from character's xSpeed
    xSpeed -= accel;
  }
  // move right?
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    // add to character's xSpeed
    xSpeed += accel;
  }
  // move up?
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    // subtract from character's ySpeed
    ySpeed -= accel;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    // add to character's ySpeed
    ySpeed += accel;
  }
  
  // now move the character based on its speed
  xPos += xSpeed;
  yPos += ySpeed;
  
  // speed limit!  prevent the user from moving too fast
  xSpeed = constrain(xSpeed, -5, 5);
  ySpeed = constrain(ySpeed, -5, 5);

  // wrap around logic
  if (xPos > width) {
    xPos = 0;
  }
  if (xPos < 0) {
    xPos = width;
  }
  if (yPos > height) {
    yPos = 0;
  }
  if (yPos < 0) {
    yPos = height;
  }
  
  // draw the character
  ellipse(xPos, yPos, 25, 25);
}