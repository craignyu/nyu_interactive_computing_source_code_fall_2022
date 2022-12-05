// our artwork
let artwork;

function preload() {
  artwork = loadImage('images/bieber.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(500, 500);

  // expose the pixels in the bieber image
  artwork.loadPixels();

  // iterate over every pixel in the image
  for (let x = 0; x < artwork.width; x++) {
    for (let y = 0; y < artwork.height; y++) {
      // compute our 1D location
      let location = (x + y * artwork.width) * 4

      // grab the r, g & b values to make things easier
      let r = artwork.pixels[location];
      let g = artwork.pixels[location + 1];
      let b = artwork.pixels[location + 2];

      // is this a white pixel?
      if (r == 255 && g == 255 && b == 255) {
        // put a blue pixel here instead
        artwork.pixels[location] = 0;
        artwork.pixels[location+1] = 0;
        artwork.pixels[location+2] = 255;
      }
    }
  }

  // because we don't really need the nested array above we could've just written
  // this using a simple for loop that would look at each pixel - I did this to reiterate
  // the procedure we went through to move between 2D images and 1D pixel arrays

  // all done, update the image
  artwork.updatePixels();

  // draw the image
  image(artwork, 0, 0);
}

function draw() {

}
