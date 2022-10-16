// graphic to hold all of our tiles as one big image
let tilesetArtwork;

// the size of each tile (32 x 32 square)
let tileSize = 32;

// load our artwork
function preload() {
  // downloaded from:  https://opengameart.org/content/dungeon-crawl-32x32-tiles-supplemental
  tilesetArtwork = loadImage('ProjectUtumno_full.png');
}

// create canvas & player object
function setup() {
  createCanvas(320,320);
}

function draw() {
  background(0);
}
