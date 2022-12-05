// our source graphic
let artwork;

function preload() {
  artwork = loadImage("images/monalisa.jpg");
}

function setup() {
  pixelDensity(1);
  createCanvas(640, 480);
  noStroke();

  // ask the image to expose its pixel array
  artwork.loadPixels();

  // now we can access individual pixel values using their location
  // location 0 - 3 represet the color values for the 1st pixel in the image
  // 0 = red, 1 = green, 2 = blue, 3 = transparency
  fill(artwork.pixels[0], artwork.pixels[1], artwork.pixels[2]);
  ellipse(width/2, height/2, 50, 50);
}

function draw() {
}
