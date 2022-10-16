// graphic to hold all of our tiles as one big image
let tilesetArtwork;

// the size of each tile (32 x 32 square)
let tileSize = 32;

// variable to hold the player object
let player;

// array to hold the tilemap for this level (2D array)
let level = [
  [1348, 266, 266, 266, 266, 266, 266, 266, 266,1348],
  [266, 1099,1099, 266,1099,1099,1099,1099,1099, 266],
  [266, 1099,1099, 266,1099,1099,1099,1099,1099, 266],
  [266, 1099,1099,1099,1099,1099,1099,1099,1099, 266],
  [266, 1099,1099,1099,1099,1099,1099,1099,1099, 266],
  [266, 1099,1099,1099,1099,1099,1099,1099,1099, 266],
  [266, 1099,1099, 266,1099,1099,1099,1099,1099, 266],
  [266, 1099,1099, 266,1099,1099,1099,1099,1099, 266],
  [266, 1099,1099, 266,1099,1099,1099,1099,1099, 266],
  [1348, 266, 266, 266, 266, 266, 266, 266, 266,1348]
];

// load our artwork
function preload() {
  // downloaded from:  https://opengameart.org/content/dungeon-crawl-32x32-tiles-supplemental
  tilesetArtwork = loadImage('ProjectUtumno_full.png');
}

// create canvas & player object
function setup() {
  createCanvas(320,320);
  player = new Player(64, 64);
}

function draw() {
  // draw the level
  drawLevel();

  // ask the player object to move and display itself
  player.move();
  player.display();
}

// given an x and y position, determine what tile is here
// do this by first converting x & y position into array positions
// then peek into the array at that position to identify the tile ID
function getTile(x,y) {
  x = int(x/tileSize);
  y = int(y/tileSize);
  console.log("tile at ", x, y, "is", level[y][x]);
  return level[y][x];
}

// determines if a tile id represents a solid tile (currently only tile #266 is solid, but change this as necessary)
function isSolid(id) {
  if (id === 266) {
    return true;
  }
  return false;
}

// function to draw the tiles represented in the multidimenstional array 'level'
function drawLevel() {
  for (let y = 0; y < level.length; y++) {
    for (let x = 0; x < level[y].length; x++) {
      drawTile( level[y][x], x*tileSize, y*tileSize);
    }
  }
}

// function to get an individual tile from the giant PNG that contains all tiles
function drawTile(i, xPos, yPos) {
  // given a tile id (i) which represents the tile's position from top to bottom, left to right
  // (i.e. the first tile at the top-left is tile 0, the second one is tile 1
  //       the first tile in the second row is tile 64)

  // step 1: compute # of tiles per row
  let tilesPerRow = tilesetArtwork.width/tileSize;

  // step 2: identify x & y position of this tile
  let x = int(i % tilesPerRow) * tileSize;
  let y = int(i / tilesPerRow) * tileSize;

  // step 3
  // use these offset values to image a portion of the giant image to the screen
  // syntax: image( FILE, DEST_X, DEST_Y, DEST_WIDTH, DEST_HEIGHT,
  //                      SOURCE_X, SOURCE_Y, SOURCE_WIDTH, SOURCE_HEIGHT)
  image(tilesetArtwork, xPos, yPos, tileSize, tileSize, x, y, tileSize, tileSize);
}




// player class
class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  display() {
    // simplay display a tile as the player (you can change this to your own graphic if you want, or to an animated sequence)
    drawTile(3934, this.x, this.y);
  }

  move() {
    // set up sensor positions
    this.sensorLeft = this.x-2;
    this.sensorRight = this.x+tileSize+2;
    this.sensorTop = this.y-2;
    this.sensorBottom = this.y+tileSize+2;
    this.middleX = this.x+tileSize/2;
    this.middleY = this.y+tileSize/2;

    // check key presses
    if (keyIsDown(65)) {
      ellipse(this.sensorLeft, this.middleY,5,5);
      // check tile to the left
      let id = getTile(this.sensorLeft,this.middleY);
      if ( isSolid(id) === false ) {
        this.x -= 2;
      }
    }

    if (keyIsDown(68)) {
      ellipse(this.sensorRight, this.middleY,5,5)
      // check tile to the left
      let id = getTile(this.sensorRight,this.middleY)
      if ( isSolid(id) === false ) {
        this.x += 2
      }
    }

    if (keyIsDown(87)) {
      ellipse(this.middleX, this.sensorTop,5,5);
      // check tile to the left
      let id = getTile(this.middleX, this.sensorTop);
      if ( isSolid(id) === false ) {
        this.y -= 2;
      }
    }

    if (keyIsDown(83)) {
      ellipse(this.middleX, this.sensorBottom,5,5);
      // check tile to the left
      let id = getTile(this.middleX, this.sensorBottom);
      if ( isSolid(id) === false ) {
        this.y += 2;
      }
    }
  }
}
