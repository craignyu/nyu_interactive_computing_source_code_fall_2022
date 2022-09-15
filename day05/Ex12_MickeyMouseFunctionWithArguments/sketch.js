function setup() {
  createCanvas(400, 400);
  background(128);
}

function draw() {

}

function mousePressed() {
  // call our function with the current mouse position
  mickeyMouseHead(mouseX, mouseY);
}

// our custom function
function mickeyMouseHead(x, y) {
  fill(0);
  ellipse(x, y, 100,100);
  ellipse(x-50,y-50,50,50);
  ellipse(x+50,y-50,50,50);
}
