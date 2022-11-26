// create a variable for A-Frame world
let world;

// references to our markers (which are defined in the HTML document)
let hiroMarker, zbMarker;

// global flag to keep track of whether we should track new markers
// (we can pause this when the user wants to interact with the content)
let tracking = true;

// graphics we may need during 2D mode
let p1, p2, currentPainting;

// scaling factor to keep track of how big to draw the painting
let scalingFactor;

function preload() {
  p1 = loadImage('../_assets/painting.jpg');
  p2 = loadImage('../_assets/painting2.jpg');
}

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  hiroMarker = world.getMarker("hiro");
  zbMarker = world.getMarker("zb");

  // put a painting on top of each marker
  let painting1 = new Plane({
    x:0, y:0, z:-1,
    width: 5, height: 3,
    rotationX: -90,
    asset: 'painting1'
  });
  hiroMarker.addChild( painting1 );

  let painting2 = new Plane({
    x:0, y:0, z:-1,
    width: 5, height: 3,
    rotationX: -90,
    asset: 'painting2'
  });
  zbMarker.addChild( painting2 );
}

function draw() {
  // if we are in tracking mode we really don't need to do anything here
  if (tracking) {

  }

  // we are in 2D mode
  else {
    // erase the background of the world (hiding the video feed)
    world.clearDrawingCanvas();
    background(0, 200);

    // in my AR system the canvas is ALWAYS 800 x 600, but it's scaled up/down as needed


    // figure out how large the painting should be (50% of the window)
    let desiredWidth = 400;
    scalingFactor = desiredWidth/currentPainting.width;

    // draw our painting
    imageMode(CENTER);
    image(currentPainting, width/2, height/2, currentPainting.width*scalingFactor, currentPainting.height*scalingFactor);

    // draw a 'close' button
    fill(255);
    textSize(25);
    textAlign(CENTER);
    text("[ close ]", width/2, height/2 + currentPainting.height*scalingFactor/2 + 50);
  }

}

function mousePressed() {
  // are we currently in tracking mode?
  if (tracking) {
    // see which marker is currently visible
    if (hiroMarker.isVisible()) {
      tracking = false;
      currentPainting = p1;
    }
    else if (zbMarker.isVisible()) {
      tracking = false;
      currentPainting = p2;
    }
  }
  else {
    // how far are they from the close button?  If so, close the window
    if (dist(mouseX, mouseY, width/2, height/2 + currentPainting.height*scalingFactor/2 + 50) < 50) {
      tracking = true;
      world.clearDrawingCanvas();
    }
  }
}
