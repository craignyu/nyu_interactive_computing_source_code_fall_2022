// create a variable to hold our world object
let world;

// create variables to hold our markers
let markerHiro;

// keep track of the position of our character
let characterX = 0;
let characterY = 0;

// artwork
let characterArtwork;
let pokemonBackground;

// keep track of whether the video has been repositioned yet
let videoRepositioned = false;

// load in p5 artwork
function preload() {
  characterArtwork = loadImage('../_assets/pikachu.png');
  pokemonBackground = loadImage('../_assets/pokemonBackground.jpg');
}

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to our two markers that we set up on the HTML side (connect to it using its 'id')
  markerHiro = world.getMarker('hiro');
}


function draw() {
  // erase the background
  world.clearDrawingCanvas();

  // draw our background image to the canvas
  image(pokemonBackground, width/2, height/2);

  // flip the order of the video, if necessary
  if (!videoRepositioned) {
    // get a DOM reference to the video and put it on top of the canvas
    let videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.style['z-index'] = '200';
      videoElement.style['transform'] = 'scale(-1,1)';
      videoElement.style['filter'] = 'flipH';
      videoRepositioned = true;
    }
  }

  // use the markers as positional controllers
  if (markerHiro.isVisible() == true) {
    // get the position of this marker
    let hiroPosition = markerHiro.getScreenPosition();

    // set the character's position using this info, making sure to adjust
    // it to mirror along the y axis
    characterX = width - hiroPosition.x;
    characterY = hiroPosition.y;
  }

  // draw the character here (even if the marker isn't visible)
  imageMode(CENTER);
  image(characterArtwork, characterX, characterY);
}
