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
  holder = createGraphics(artwork.width, artwork.height);
}

function draw() {
  // erase the bg
  background(255);

  // expose the pixels in the bieber image
  artwork.loadPixels();

  // expose the pixels in the holder image
  holder.loadPixels();

  // compute a threshold to allow us to dynamically interact with the image - essentially
  // this is a number that we will use to determine how much blue to add to the image
  let thresh = map(mouseX, 0, width, 0, 255);

  // iterate over every pixel in the image
  for (let x = 0; x < artwork.width; x++) {
    for (let y = 0; y < artwork.height; y++) {
      i = (x + y * artwork.width) * 4;

      // grab the r, g & b values to make things easier
      let r = artwork.pixels[i];
      let g = artwork.pixels[i + 1];
      let b = artwork.pixels[i + 2];

      // does this pixel qualify?
      if (r > thresh && g > thresh && b > thresh) {
        // put a blue pixel in the holder instead
        holder.pixels[i] = 0;
        holder.pixels[i + 1] = 0;
        holder.pixels[i + 2] = 255;
        holder.pixels[i + 3] = 255;
      }
      // otherwise just put the pixel into the holder as-is
      else {
        holder.pixels[i] = r;
        holder.pixels[i + 1] = g;
        holder.pixels[i + 2] = b;
        holder.pixels[i + 3] = 255;
      }
    }
  }

  // all done, update the holder image
  holder.updatePixels();

  // draw the image
  image(holder, 0, 0);
}
