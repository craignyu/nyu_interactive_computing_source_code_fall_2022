// artwork for our background layer
// our background art is 1024 x 576
let artwork;

// keep track of artwork location
let x1 = 0;
let x2 = 1024;

function preload() {
  artwork = loadImage('layer05.png');
}

function setup() {
  createCanvas(1024, 576);
}

function draw() {
  background(128);

  image(artwork, x1, 0);
  image(artwork, x2, 0);

  x1 -= 5;
  x2 -= 5;

  ellipse(x1, 200, 20, 20);
  ellipse(x2, 200, 20, 20);

  if (x1 <= -1024) {
    x1 = x2 + 1024;
    console.log("cycle 1");
  }
  if (x2 <= -1024) {
    x2 = x1 + 1024;
    console.log("cycle 2");
  }

}
