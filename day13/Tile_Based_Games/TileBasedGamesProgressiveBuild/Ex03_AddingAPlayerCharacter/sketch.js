// set up an array to hold all of our tiles
let tiles = [];

// how many tiles should we load?  we have images
// labeled 0.png up through 48.png, so we
// want to load 49 tiles in total
let numTiles = 49;

// define our level
// a level is organized using a multidimensional array
let level = [
  [18, 6, 6, 6, 6, 6, 6, 6, 6, 18],
  [6, 14, 14, 14, 14, 14, 14, 14, 14, 6],
  [6, 14, 14, 14, 14, 14, 14, 14, 14, 6],
  [6, 14, 14, 14, 14, 14, 14, 14, 14, 6],
  [6, 14, 14, 14, 14, 14, 14, 0, 14, 6],
  [6, 14, 14, 14, 14, 14, 0, 14, 14, 6],
  [6, 14, 14, 14, 14, 0, 14, 14, 14, 6],
  [6, 14, 14, 14, 0, 14, 14, 14, 14, 6],
  [6, 14, 14, 14, 0, 14, 14, 14, 14, 6],
  [18, 6, 6, 6, 6, 6, 6, 6, 6, 18]
];

// how big should we draw each tile
let tileSize = 50;

// artwork for our player character
let marioArtwork;

// our player
let player;

function preload() {
  // load in all tiles using a loop
  for (let i = 0; i < numTiles; i++) {
    tiles.push( loadImage('../tiles/' + i + '.png'));
  }

  // load in our mario artwork
  marioArtwork = loadImage('../tiles/marioright.png');
}

function setup() {
  createCanvas(500, 500);

  // our player character
  player = new Player(100, 100);
}

function draw() {
  // re-draw our level
  drawLevel();

  // draw and move our player
  player.moveAndDisplay();
}

function drawLevel() {
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

class Player {

  constructor(x, y) {
    // store our position
    this.x = x;
    this.y = y;
  }

  // move and display function
  moveAndDisplay() {
    // move the character, if necessary
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 2;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 2;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 2;
    }

    // draw the character
    image(marioArtwork, this.x, this.y);
  }
}
