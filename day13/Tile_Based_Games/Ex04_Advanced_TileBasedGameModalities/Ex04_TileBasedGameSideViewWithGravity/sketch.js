// SPECIAL NOTE: This program uses a number of external JavaScript files to organize some of
// the objects that we need to fully implement a tile-based game.  These JavaScript files
// are referenced in the HTML document.  References to these documents are also included
// as comments within this file.

// our world object - this object handles our tiles, drawing the world and converting screen
// coordinates into game coordinates - see SideViewWorld.js for more information
let theWorld;

// our user controlled character object - see Player.js for more information
let thePlayer;

// create an object to hold our "world parameters" - we will send this object into our
// OverheadWorld to tell it how our world is organized
let worldParameters = {
  tileSize: 50,
  tileFolder: 'tiles',
  numTiles: 49,
  tileMap: [
    [18,  6,  6,  6,  6,  6,  6,  6,  6, 18],
    [6,  14, 14, 14, 14, 14, 14, 14, 14,  6],
    [6,  14, 14, 14, 14, 14, 14, 14, 14,  6],
    [6,  14, 14, 14, 14, 14, 14, 14, 14,  6],
    [6,  14, 14, 14, 14, 14, 14,  0, 14,  6],
    [6,  14, 14, 14, 14, 14,  0, 14, 14,  6],
    [6,   0, 14, 14, 14,  0, 14, 14, 14,  6],
    [6,  14, 14, 14,  0, 14, 14, 14,  6,  6],
    [6,  14, 14,  0,  0, 14, 14, 14, 14,  6],
    [18,  6,  6,  6,  6,  6,  6,  6,  6, 18]
  ],
  solidTiles: {0:true, 18:true, 6:true},
  gravity: 0.1,
  gravityMax: 5
};

// handle the tile loading and creating our player object in preload before the game can start
function preload() {
  theWorld = new SideViewWorld(worldParameters);
  thePlayer = new Player(100, 100, theWorld);
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  theWorld.displayWorld()
  thePlayer.move();
  thePlayer.display();
}
