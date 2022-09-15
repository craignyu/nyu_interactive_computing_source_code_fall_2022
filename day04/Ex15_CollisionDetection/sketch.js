// character position
let xPos, yPos ;

// character speed
let xSpeed, ySpeed;

// acceleration value (something VERY small)
let accel = 0.1;

// coin position
let xCoin, yCoin;

// coin artwork
let coinArtwork;

// points
let points = 0;

function preload() {
  coinArtwork = loadImage('coin.png');
  imageMode(CENTER);
}

function setup() {
  createCanvas(500, 500);

  // default position to the middle of the screen
  xPos = 250;
  yPos = 250;

  // default speed to 0
  xSpeed = 0;
  ySpeed = 0;

  // where is the coin?
  xCoin = random(25, width-25);
  yCoin = random(25, height-25);

  fill(255);
  noStroke();
}

function draw() {
  background(0);

  // display points
  text("Points: " + points, 20, 20);

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

  // constrain xSpeed to an acceptable range
  xSpeed = constrain(xSpeed, -5, 5);
  ySpeed = constrain(ySpeed, -5, 5);

  // now move the character based on its speed
  xPos += xSpeed;
  yPos += ySpeed;

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

  // COLLISION DETECTION
  if (dist(xPos, yPos, xCoin, yCoin) < 25) {
    // collision happened, move the coin
    xCoin = random(25, width-25);
    yCoin = random(25, height-25);

    // give the user a point
    points += 1;
  }

  // draw the coin
  imageMode(CENTER)
  image(coinArtwork, xCoin, yCoin);

  // draw the character
  ellipse(xPos, yPos, 25, 25);

}
