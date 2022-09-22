function setup() {
  // create a canvas and grab a reference to it
  let cnv = createCanvas(500,500);

  // reparent the canvas to the 'canvas_container' div
  cnv.parent('#canvas_container');

  // set a background
  background(128);
}

function draw() {
}

function createCircle() {
  // pick a random position & size
  let x = random(20, width-20);
  let y = random(20, height-20);
  let size = random(20,100);

  // draw a circle here
  fill(random(255), random(255), random(255));
  ellipse(x,y,size,size);
}

function createRectangle() {
  // pick a random position & size
  let x = random(50, width-50);
  let y = random(50, height-50);
  let size1 = random(20,100);
  let size2 = random(20,100);

  // draw a circle here
  fill(random(255), random(255), random(255));
  rectMode(CENTER);
  rect(x,y,size1,size2);
}
