// graphic to hold all of our tiles as one big image
let tilesetArtwork;

// the size of each tile (32 x 32 square)
let tileSize = 32;

// ofsets for screen scrolling
let offsetX = 0;
let offsetY = 0;

// define our world
let world = [
  [460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460],
  [460,257,257,257,257,460,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,460,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,460,460,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,460,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,460,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,460,257,257,257,257,257,257,257,257,460],
  [460,257,257,257,257,257,257,257,257,257,460,257,257,257,257,257,257,257,257,460],
  [460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460,460],
];

// overlays for our world
let overlay = []

// player character object
let player;

// load our artwork
function preload() {
  // downloaded from:  https://opengameart.org/content/dungeon-crawl-32x32-tiles-supplemental
  tilesetArtwork = loadImage('ProjectUtumno_full.png');
}

// create canvas & player object
function setup() {
  createCanvas(320,320);
  background(128);

  // setup the world overlay
  setupOverlay();

  // create our player
  player = new Player(width/2-16, height/2-16);
}

function draw() {
  // draw the world and the character
  background(0);
  push();
  translate(offsetX, offsetY);
  drawWorld();
  pop();

  // the character will always be drawn in the middle of the screen
  player.moveAndDisplay();
}

// draw the entire world using the 2D array above
function drawWorld() {
  for (let y = 0; y < world.length; y++) {
    for (let x = 0; x < world[y].length; x++) {
      // extract the tile here
      let id = world[y][x];
      drawTile(id, x*tileSize, y*tileSize);

      // also draw the overlay here
      let idOverlay = overlay[y][x];
      drawTile(idOverlay, x*tileSize, y*tileSize);
    }
  }
}

// draw tile with an ID of i and position x,y
function drawTile(id, screenX, screenY) {
  // step 1: figure out how many tiles are on each row of our image
  let tilesPerRow = int( tilesetArtwork.width / tileSize );

  // step 2: give the tile ID, figure out where that tile exists
  // in the source image.
  let imageX = int( id % tilesPerRow ) * tileSize;
  let imageY = int( id / tilesPerRow ) * tileSize;

  // step 3: draw the desired tile
  image(tilesetArtwork, screenX, screenY, tileSize, tileSize,
                        imageX, imageY, tileSize, tileSize);


}

// setup our overlay array
function setupOverlay() {
  // set up the overlay to be the same size as the world, just filled with -1's
  for (let y = 0; y < world.length; y++) {
    overlay.push([]);
    for (let x = 0; x < world[y].length; x++) {
      overlay[y].push(-1);
    }
  }
}

// obtain the tile ID at a given screen coordinate
function getWorldTileAtPosition(screenX, screenY) {
  // convert screen coordinates into array coordinates
  let arrayX = int( (screenX-offsetX) / tileSize );
  let arrayY = int( (screenY-offsetY) / tileSize );

  let id = world[arrayY][arrayX];
  return id;
}

function getOverlayTileAtPosition(screenX, screenY) {
  // convert screen coordinates into array coordinates
  let arrayX = int( (screenX-offsetX) / tileSize );
  let arrayY = int( (screenY-offsetY) / tileSize );

  let id = overlay[arrayY][arrayX];
  return id;
}

function keyPressed() {
  player.changeEnvironment();
}


function setOverlayAtPosition(id, screenX, screenY) {
  // convert screen coordinates into array coordinates
  let arrayX = int( (screenX-offsetX) / tileSize );
  let arrayY = int( (screenY-offsetY) / tileSize );

  if (world[arrayY][arrayX] != undefined) {
    overlay[arrayY][arrayX] = id;
  }
}

function isSolid(id) {
  // return true for all solid tiles
  if (id == 460) {
    return true;
  }
  return false;
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2;
  }

  computeSensors() {
    this.middleX = int( this.x + tileSize / 2 );
    this.middleY = int( this.y + tileSize / 2 );
    this.left = int(this.x - 2);
    this.right = int(this.x + tileSize + 2);
    this.up = int(this.y - 2);
    this.down = int(this.y + tileSize + 2);
  }

  changeEnvironment() {
    // manipulate the environment with the space key
    if (keyIsDown(32)) {
      // if there's nothing here we should add something
      if (getOverlayTileAtPosition(this.middleX, this.middleY) == -1) {
        // adjust what's in the array here
        setOverlayAtPosition(int(random(1,5)), this.middleX, this.middleY);
      }
      else {
        setOverlayAtPosition(-1, this.middleX, this.middleY);
      }
    }
  }

  moveAndDisplay() {
    this.computeSensors();

    if (keyIsDown(68)) {
      ellipse(this.right, this.middleY, 5, 5);
      let id = getWorldTileAtPosition(this.right, this.middleY);
      console.log(id);
      if (!isSolid(id)) {
        //this.x -= this.speed;
        offsetX -= this.speed;
      }
    }
    if (keyIsDown(65)) {
      ellipse(this.left, this.middleY, 5, 5);
      let id = getWorldTileAtPosition(this.left, this.middleY);
      console.log(id);
      if (!isSolid(id)) {
        //this.x += this.speed;
        offsetX += this.speed;
      }
    }
    if (keyIsDown(87)) {
      ellipse(this.middleX, this.up, 5, 5);
      let id = getWorldTileAtPosition(this.middleX, this.up);
      if (!isSolid(id)) {
        //this.y -= this.speed;
        offsetY += this.speed;
      }
    }
    if (keyIsDown(83)) {
      ellipse(this.middleX, this.down, 5, 5);
      let id = getWorldTileAtPosition(this.middleX, this.down);
      if (!isSolid(id)) {
        //this.y += this.speed;
        offsetY -= this.speed;
      }
    }

    drawTile(1733, this.x, this.y);
  }
}
