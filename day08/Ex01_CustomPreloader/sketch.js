// see the 'index.html' file in this sketch folder - it contains a
// div named '#p5_loading' - this div will be displayed while the
// preload() function is operating - once it completes the div will
// automatically be hidden

function preload() {
  let bigImage1 = loadImage("big_image1.png");
  let bigImage2 = loadImage("big_image2.png");
  let bigImage3 = loadImage("big_image3.png");
  let bigImage4 = loadImage("big_image4.png");
  let bigImage5 = loadImage("big_image5.png");
  let bigImage6 = loadImage("big_image6.png");
}

function setup() {
  // setup the canvas and center it horizontally
  let theCanvas = createCanvas(500,500);
  theCanvas.style('display', 'block');
  theCanvas.style('margin', 'auto');
  background(0);
}

function draw() {
  let s = random(10,30);
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), s, s);
}
