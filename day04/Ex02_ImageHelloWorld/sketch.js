// a holder variable for our artwork
let artwork;

// preload is called before any other functions
// ALL function calls within preload must complete before setup gets called
// we generally use this function to handle all of our file loads (images, sounds, etc)
function preload() {
  // load our image
  artwork = loadImage("chicken.png");
}

function setup() {
  createCanvas(500, 500);

  // draw our artwork in the middle of the screen
  // note that images are drawn from their top-left corner
  // you can change this behavior by calling the imageMode(CENTER) function
  imageMode(CENTER);
  image(artwork, 250, 250);
}

function draw() {

}
