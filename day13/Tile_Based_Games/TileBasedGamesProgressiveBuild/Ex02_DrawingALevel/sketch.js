// set up an array to hold all of our tiles
let tiles = [];

// how many tiles should we load?  we have images
// labeled 0.png up through 48.png, so we
// want to load 49 tiles in total
let numTiles = 49;

// define our level
// a level is organized using a multidimensional array
let level = [
    [18,  6,  6,  6,  6,  6,  6,  6,  6, 18],
    [6,   6, 14, 14, 14, 14, 14, 14, 14,  6],
    [6,  14,  6, 14, 14, 14, 14, 14, 14,  6],
    [6,  14, 14,  6, 14, 14, 14, 14, 14,  6],
    [6,  14, 14, 14, 14, 14, 14,  0, 14,  6],
    [6,  14, 14, 14, 14, 14,  0, 14, 14,  6],
    [6,  14, 14, 14, 14,  0, 14, 14, 14,  6],
    [6,  14, 14, 14,  0, 14, 14, 14, 14,  6],
    [6,  14, 14, 14,  0, 14, 14, 14, 14,  6],
    [18,  6,  6,  6,  6,  6,  6,  6,  6, 18]
  ];

// how big should we draw each tile
let tileSize = 50;

function preload() {
  // load in all tiles using a loop
  for (let i = 0; i < numTiles; i++) {
    tiles.push( loadImage('../tiles/' + i + '.png'));
  }
}

function setup() {
  createCanvas(500, 500);

  // render our level
  for (let row = 0; row < level.length; row++) {
    for (let col = 0; col < level[row].length; col++) {
      // figure out which tile we want to draw (this will extract an integer from the level array that relates to the tile that should be drawn here)
      let img = level[row][col];

      // now compute the position we should be drawing at
      // col = x, row = y
      // multiply by tileSize to figure out the correct offset
      let xPos = col * tileSize;
      let yPos = row * tileSize;

      // draw the correct tile at this position
      image(tiles[img], xPos, yPos, tileSize, tileSize);
    }
  }

}

function draw() {

}
