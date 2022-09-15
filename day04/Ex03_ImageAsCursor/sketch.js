// a holder variable for our artwork
let artwork;

// preload is called before any other functions
// ALL function calls within preload must complete before setup gets called
// we generally use this function to handle all of our file loads (images, sounds, etc)
function preload() {
  // load our image
  artwork = loadImage("flower-1.png");
}

function setup() {
  createCanvas(500, 500);

  // draw all images from their center point
  imageMode(CENTER);

  // turn off the standard mouse cursor
  noCursor();
}

function draw() {
  background(0);

  image(artwork, mouseX, mouseY);
}
