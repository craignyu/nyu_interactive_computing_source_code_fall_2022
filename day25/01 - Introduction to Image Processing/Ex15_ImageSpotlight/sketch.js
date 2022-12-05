// our artwork
let artwork;

// a holder image
let holder;

function preload() {
  artwork = loadImage('images/bieber.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(500, 500);

  // create our holder (make it the same size as our source artwork)
  holder = new p5.Image(artwork.width, artwork.height);
}

function draw() {
  // erase the bg
  background(255);

  // expose the pixels in the bieber image
  artwork.loadPixels();

  // expose the pixels in the holder image
  holder.loadPixels();

  // iterate over every pixel in the image
  for (let x = 0; x < artwork.width; x++) {
    for (let y = 0; y < artwork.height; y++) {
      i = (x + y * artwork.width) * 4;

      // grab the r, g & b values to make things easier
      let r = artwork.pixels[i];
      let g = artwork.pixels[i + 1];
      let b = artwork.pixels[i + 2];

      // is this pixel close to the mouse?  If so, keep it
      if (dist(mouseX, mouseY, x, y) < 100) {
        // put a blue pixel in the holder instead
        holder.pixels[i] = r;
        holder.pixels[i + 1] = g;
        holder.pixels[i + 2] = b;
        holder.pixels[i + 3] = 255;
      }
      // otherwise the pixel should be black
      else {
        holder.pixels[i] = 0;
        holder.pixels[i + 1] = 0;
        holder.pixels[i + 2] = 0;
        holder.pixels[i + 3] = 255;
      }
    }
  }

  // all done, update the holder image
  holder.updatePixels();

  // draw the image
  image(holder, 0, 0);
}
