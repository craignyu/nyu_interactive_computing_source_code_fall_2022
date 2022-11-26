// create a variable to hold our world object
var world;

// create variables to hold our markers
var markerHiro, markerZb;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');
  markerZb = world.getMarker('zb');
}


function draw() {
  // erase the background
  world.clearDrawingCanvas();

  // use the markers as identity controllers
  if (markerHiro.isVisible() == true) {
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text("Hiro is visible", width/2, height/2);
  }
  if (markerZb.isVisible() == true) {
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text("ZB is visible", width/2, height/2+50);
  }
}
