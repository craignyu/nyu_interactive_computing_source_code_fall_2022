// create a variable for A-Frame world
let world;

// references to our markers (which are defined in the HTML document)
let hiroMarker, zbMarker;

// global flag to keep track of whether we should track new markers
// (we can pause this when there's an overlay visible)
let tracking = true;

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  hiroMarker = world.getMarker("hiro");
  zbMarker = world.getMarker("zb");
}

function draw() {

  // if we are in tracking mode
  if (tracking) {

    // see which markers are visible
    if (zbMarker.isVisible()) {
      // we found one!  stop tracking new ones
      tracking = false;

      // make the associated content window available
      document.getElementById('zb_content').style.display = 'block';
    }
    else if (hiroMarker.isVisible()) {
      tracking = false;
      document.getElementById('hiro_content').style.display = 'block';
    }
  }

}

// see the HTML document - this function is called when the user chooses to
// close the window with the 'close window' button - it restarts tracking
function p5_restartTracking() {
  tracking = true;
}

function mousePressed() {
}
