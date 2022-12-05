// artwork
let bgArtwork, ghost;

// load our images
function preload() {
  bgArtwork = loadImage('images/halloween_background.png');
  artwork = loadImage('images/theghost.png');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // draw the background scene, making sure to draw the scene with no alterations
  // (100% of the red, green and blue channels will be represented)
  tint(255,255,255);
  imageMode(CORNER);
  image(bgArtwork, 0, 0);

  // compute transparency (alpha) based on distance to the center
  let alpha = map(dist(mouseX, mouseY, width/2, height/2), 0, 400, 255, 0);

  // draw the ghost, using transparency based on its position
  tint(255,255,255,alpha);
  imageMode(CENTER);
  image(artwork, mouseX, mouseY);
}
