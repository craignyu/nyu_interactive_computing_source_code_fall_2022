// keep track of our rgb colors
let r = 128;
let g = 128;
let b = 128;

// keep track of which brush we want to use
let brush = 'ellipse';

function setup() {
  // create a canvas and grab a reference to it
  let cnv = createCanvas(500,500);

  // reparent the canvas to the 'canvas_container' div
  cnv.parent('#canvas_container');

  // set a background & drawing defaults
  background(200);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  if (mouseIsPressed) {

    fill(r,g,b);

    if (brush == 'ellipse') {
      ellipse(mouseX, mouseY, 20, 20);
    }
    if (brush == 'rect') {
      rect(mouseX, mouseY, 20, 20);
    }

  }
}

// change the drawing brush for the canvas
function changeBrush(el) {
  console.log(el.value);
  if (el.value == 'ellipse') {
    brush = 'ellipse';
  }
  if (el.value == 'rect') {
    brush = 'rect';
  }
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

function clearCanvas() {
  background(128);
}

function saveImage() {
  save('masterpiece.png');
}
