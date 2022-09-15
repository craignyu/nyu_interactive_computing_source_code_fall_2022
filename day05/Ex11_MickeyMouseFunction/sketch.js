function setup() {
  createCanvas(400, 400);
  
  // call our custom function
  mickeyMouseHead();
}

function draw() {
  
}

// our custom function
function mickeyMouseHead() {
  fill(0);
  ellipse(200,200, 100, 100);
  ellipse(150,150,50,50);
  ellipse(250,150,50,50);
}
