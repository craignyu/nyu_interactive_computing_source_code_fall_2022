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
  [6, 14, 14, 14,  6, 14, 14, 14, 14, 6],
  [6, 14, 14, 14,  6, 14, 14, 14, 14, 6],
  [6, 14, 14, 14,  6, 14, 14, 14, 14, 6],
  [6, 14, 14, 14,  6, 14, 14, 0, 14, 6],
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

  noStroke();
  fill(255);
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

// this function can translate a screen position into a tile position in our array
function computeTileBasedOnScreenPosition(x, y) {
  // first we need to convert the x & y position into aray positions
  let row = int( y / tileSize );
  let col = int( x / tileSize );

  // now we can extract the tile ID
  let tileId = level[row][col];

  // send back the tile ID
  return tileId;
}

// tells us if the tile in quesiton is solid
function isSolid(tileId) {
  // our solid tiles are 18, 6 and 0 in this example
  // if the given tile is one of these then we should return true
  if (tileId == 18 || tileId == 6 || tileId == 0) {
    return true;
  }
  return false;
}

class Player {

  constructor(x, y) {
    // store our position
    this.x = x;
    this.y = y;
  }

  // move and display function
  moveAndDisplay() {
    // define our four "sensor" positions - up, down, left and right
    let sensorRightX = this.x + marioArtwork.width;
    let sensorRightY = this.y + marioArtwork.height / 2;
    let sensorLeftX  = this.x;
    let sensorLeftY  = this.y + marioArtwork.height / 2;
    let sensorUpX    = this.x + marioArtwork.width / 2;
    let sensorUpY    = this.y;
    let sensorDownX  = this.x + marioArtwork.width / 2;
    let sensorDownY  = this.y + marioArtwork.height;

    // move the character, if necessary
    if (keyIsDown(RIGHT_ARROW)) {
      // draw the appropriate sensor
      ellipse(sensorRightX, sensorRightY, 15, 15);

      // get the tileID of the tile in this direction
      let tileId = computeTileBasedOnScreenPosition(sensorRightX, sensorRightY);
      text("Tile to the RIGHT is: " + tileId, 20, 20);

      // only move if the tile is not solid
      if (! isSolid(tileId) ) {
        this.x += 2;
      }
    }
    if (keyIsDown(LEFT_ARROW)) {
      // draw the appropriate sensor
      ellipse(sensorLeftX, sensorLeftY, 15, 15);

      // get the tileID of the tile in this direction
      let tileId = computeTileBasedOnScreenPosition(sensorLeftX, sensorLeftY);
      text("Tile to the LEFT is: " + tileId, 20, 40);

      // only move if the tile is not solid
      if (! isSolid(tileId) ) {
        this.x -= 2;
      }
    }
    if (keyIsDown(UP_ARROW)) {
      // draw the appropriate sensor
      ellipse(sensorUpX, sensorUpY, 15, 15);

      // get the tileID of the tile in this direction
      let tileId = computeTileBasedOnScreenPosition(sensorUpX, sensorUpY);
      text("Tile to the TOP is: " + tileId, 20, 60);

      // only move if the tile is not solid
      if (! isSolid(tileId) ) {
        this.y -= 2;
      }
    }
    if (keyIsDown(DOWN_ARROW)) {
      // draw the appropriate sensor
      ellipse(sensorDownX, sensorDownY, 15, 15);

      // get the tileID of the tile in this direction
      let tileId = computeTileBasedOnScreenPosition(sensorDownX, sensorDownY);
      text("Tile to the BOTTOM is: " + tileId, 20, 80);

      // only move if the tile is not solid
      if (! isSolid(tileId) ) {
        this.y += 2;
      }
    }

    // draw the character
    image(marioArtwork, this.x, this.y);
  }
}
