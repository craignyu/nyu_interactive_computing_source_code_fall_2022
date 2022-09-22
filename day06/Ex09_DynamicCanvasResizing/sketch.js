// global variable to keep track of our canvas
let cnv;

function setup() {
  // create a canvas with the current size of the
  // browser window
  cnv = createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(random(255), random(255), random(255));
  ellipse(random(50,width-50), random(50, height-50), 50, 50);
}

// every time the browser is resized we should adjust
// the size of the canvas
function windowResized() {
  // reset the size of the canvas to the new window size
  cnv.resize(windowWidth, windowHeight);
}
