function setup() {
  createCanvas(400, 400);
  background(128);
}

function draw() {

}

function mousePressed() {
  // call our function with the current mouse position and a random radius
  mickeyMouseHead(mouseX, mouseY, random(10, 30));
}

// our custom function
function mickeyMouseHead(x, y, r) {
  fill(0);
  ellipse(x, y, r*2,r*2);
  ellipse(x-r,y-r,r,r);
  ellipse(x+r,y-r,r,r);
}
