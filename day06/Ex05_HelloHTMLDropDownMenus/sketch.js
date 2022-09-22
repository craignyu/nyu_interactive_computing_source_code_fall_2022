// what color should we start with?
let colorToUse = '#ff0000';

function setup() {
  // create a canvas and grab a reference to it
  let cnv = createCanvas(500,500);

  // reparent the canvas to the 'canvas_container' div
  cnv.parent('#canvas_container');

  // set a background
  background(128);
}

function draw() {
  // if the mouse is down let the user draw with the selected color
  if (mouseIsPressed) {
    fill(colorToUse);
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
  }
}

function changeColor(el) {
  // el is a reference back to the drop down menu that called this function
  // we can use it to grab the current value of the menu
  colorToUse = el.value;
}

function clearCanvas() {
  background(128);
}
