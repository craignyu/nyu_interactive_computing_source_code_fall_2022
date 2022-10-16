// set up an array to hold all of our tiles
let tiles = [];

// how many tiles should we load?  we have images
// labeled 0.png up through 48.png, so we
// want to load 49 tiles in total
let numTiles = 49;

function preload() {
  // load in all tiles using a loop
  for (let i = 0; i < numTiles; i++) {
    tiles.push( loadImage('../tiles/' + i + '.png'));
  }
}

function setup() {
  createCanvas(512, 512);

  // draw all of our tiles
  // tiles are all 16x16 pixels
  let xPos = 0;
  let yPos = 0;
  for (let i = 0; i < tiles.length; i++) {
    image(tiles[i], xPos, yPos, 64, 64);
    xPos += 64;
    if (xPos > width) {
      xPos = 0;
      yPos += 64;
    }
  }

}

function draw() {
}
