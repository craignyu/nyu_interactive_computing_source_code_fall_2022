// SPECIAL NOTE: This program uses a number of external JavaScript files to organize some of
// the objects that we need to fully implement a tile-based game.  These JavaScript files
// are referenced in the HTML document.  References to these documents are also included
// as comments within this file.

// our world object - this object handles our tiles, drawing the world and converting screen
// coordinates into game coordinates - see OverheadWorld.js for more information
let theWorld;

// our user controlled character object - see Player.js for more information
let thePlayer;

// create an object to hold our "world parameters" - we will send this object into our
// OverheadWorld to tell it how our world is organized
let worldParameters = {
  tileSize: 50,
  tileFolder: 'tiles',
  numTiles: 49,
  solidTiles: {0:true, 18:true, 6:true}
};

// room data - loaded in from an external file (see 'data/rooms.json')
let roomData;

// handle the tile loading and creating our player object in preload before the game can start
function preload() {

  // load in room data
  roomData = loadJSON("data/rooms.json");

  // create our world
  theWorld = new OverheadWorld(worldParameters);

  // create our player
  thePlayer = new Player(100, 100, theWorld);
}

function setup() {
  createCanvas(500,500);

  // now that everything is fully loaded send over the room data to our world object
  // also let the world know which room we should start with
  theWorld.setupRooms( roomData, "start" );
}

function allDone(worldData) {
  console.log("here");
}

function badStuffHappened(result) {
  console.log(result);
}

function draw() {
  theWorld.displayWorld()
  thePlayer.move();
  thePlayer.display();
}
