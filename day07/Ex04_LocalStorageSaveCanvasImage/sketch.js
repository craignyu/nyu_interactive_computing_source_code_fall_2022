// current color
let r = 128;
let g = 128;
let b = 128;

// reference to the canvas
let cnv;

// previous image (from localStorage)
let previousImage = false;

function preload() {
  // do we have a previous drawing?  if so, let's load it in as an image
  let rawData = window.localStorage.getItem('previousDrawing');
  if (rawData) {
    previousImage = loadImage(rawData);
  }
}

function setup() {
  // create our canvas and grab a p5 reference to it
  pixelDensity(1);
  cnv = createCanvas(400, 400);
  cnv.parent("#container");

  console.log( displayDensity() );

  // do we have a previous image?
  if (previousImage) {
    image(previousImage, 0, 0);
  }
  // otherwise just use a black background to start
  else {
    background(0);
  }
  noStroke();
}

function draw() {
  // when the mouse is pressed draw to the canvas
  if (mouseIsPressed) {
    fill(r,g,b);
    ellipse(mouseX, mouseY, 20, 20);
  }
}

function mouseReleased() {
  // whenever the mouse is released we should save a copy of what's on
  // the canvas and store it in localStorage
  // we can do this using an HTML canvas function called 'toDataURL' which will
  // create a PNG of the canvas stored as a string
  // note: cnv is the p5 reference to the canvas (it's a p5 created object)
  //       cnv.elt is the DOM reference to the object
  let pngRawData = cnv.elt.toDataURL();

  // store this in localStorage
  window.localStorage.setItem('previousDrawing', pngRawData);
}



// HTML UI functions

// clear the canvas (triggered from a button press)
function clearCanvas() {
  background(0);
}

// these functions get called every time the range inputs change in the HTML document
// they all get called with a reference back to the slider that invoked the event
function changeRed(el) {
  // update the variable with the current value of this slider
  r = int( el.value );

  // update the 'preview' DOM element with our most recent color
  updatePreview();
}
function changeGreen(el) {
  // update the variable with the current value of this slider
  g = int( el.value );

  // update the 'preview' DOM element with our most recent color
  updatePreview();
}
function changeBlue(el) {
  // update the variable with the current value of this slider
  b = int( el.value );

  // update the 'preview' DOM element with our most recent color
  updatePreview();
}

function updatePreview() {
  // grab a DOM reference to the 'preview' span tag
  let previewReference = document.querySelector('#preview');

  // assign it a CSS background color
  previewReference.style.backgroundColor = `rgb(${r},${g},${b})`;
}
