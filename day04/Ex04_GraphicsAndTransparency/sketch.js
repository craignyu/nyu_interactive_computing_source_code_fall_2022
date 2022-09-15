// holders for our graphics
let mario1, mario2;

// background colors
let r,g,b;

// background change amounts
let rs,gs,bs;

function preload() {
  // load our graphics
  mario1 = loadImage('mario1.jpg');
  mario2 = loadImage('mario2.png');
}

function setup() {
  createCanvas(400, 400);
  background(0);

  // pick some background colors
  r = random(255);
  g = random(255);
  b = random(255);

  // pick some background change speeds
  rs = random(-2,2);
  gs = random(-2,2);
  bs = random(-2,2);
}

function draw() {
  background(r,g,b);

  // draw our two images
  image(mario1, 100, 100);
  image(mario2, 200, 200);

  // cycle our colors
  r += rs;
  g += gs;
  b += bs;

  // bounce color speed change?
  if (r > 255 || r < 0) {
    rs *= -1;
  }
  if (g > 255 || b < 0) {
    gs *= -1;
  }
  if (b > 255 || b < 0) {
    bs *= -1;
  }

}
