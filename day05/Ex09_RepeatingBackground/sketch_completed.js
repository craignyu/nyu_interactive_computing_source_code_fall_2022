// artwork for our background layer
// our background art is 1024 x 576
let artwork;

// because we need to have the image scroll we will need to draw two copies of it to the screen at a time
// the first copy will start at x=0, the second will start at x=1024 (right next to one another)
let p1 = 0;
let p2 = 1024;

function preload() {
  artwork = loadImage('layer05.png');
}

function setup() {
  createCanvas(1024, 576);
}

function draw() {
  background(128);

  // draw our two backgrounds to the screen - initially one of
  // them will be off screen to the right
  image(artwork, p1, 0);
  image(artwork, p2, 0);

  // indicators to show the bounds of each image
  fill(0,255,0);
  ellipse(p1, 400, 25, 25);

  fill(0,0,255);
  ellipse(p2, 400, 25, 25);

  // move both positions a little bit to the left
  p1 -= 2;
  p2 -= 2;

  // did one of the backgrounds move fully off screen?
  if (p1 <= -1024) {
    // move it back to the right of p2
    p1 = p2 + 1024;
    console.log("cycle p1");
  }
  if (p2 <= -1024) {
    // move it back to the right of p1
    p2 = p1 + 1024;
    console.log("cycle p2");
  }
}
