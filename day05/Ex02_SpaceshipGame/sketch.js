// variables to hold our artwork
var spaceshipArtwork;
var cowArtwork;
var backgroundArtwork;

// store the current position of our spaceship
var shipX = 250;
var shipY = 250;

// store the current position of our cow
var cowX, cowY;

// keep track of points
var points = 0;
var misses = 0;

// load in all of our graphical assets
function preload() {
  backgroundArtwork = loadImage("background.jpg");
  spaceshipArtwork = loadImage("ufo.png");
  cowArtwork = loadImage("cow.png");
}

function setup() {
  createCanvas(500, 500);

  // default our cow to appear in a random position near the bottom of the screen
  cowX = random(50, 450);
  cowY = 380;
}

function draw() {
  // draw our background image
  imageMode(CORNER);
  image(backgroundArtwork, 0, 0);

  // report the # of points earned & missed cows
  text("Points: " + points, 50, 50);
  text("Lost cows: " + misses, 50, 75);

  // draw the spaceship & the cow
  imageMode(CENTER);
  image(cowArtwork, cowX, cowY);
  image(spaceshipArtwork, shipX, shipY);

  // move the cow away from the spaceship
  if (cowX < shipX) {
    cowX -= 1;
  }
  if (cowX > shipX) {
    cowX += 1;
  }

  // did the cow get away?
  if (cowX > width || cowX < 0) {
    misses += 1;
    cowX = random(50, 450);
  }

  // see if we need to move the spaceship
  if (keyIsDown(65)) {
    shipX -= 3;
  }
  if (keyIsDown(68)) {
    shipX += 3;
  }
  if (keyIsDown(87)) {
    shipY -= 3;
  }
  if (keyIsDown(83)) {
    shipY += 3;
  }

  // see if the spaceship has touched the cow
  if (dist(shipX, shipY, cowX, cowY) < 25) {
    points += 1;
    cowX = random(50, 450);
  }
}
