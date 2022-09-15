// note: this is a hard coded, repetitive solution!
// a better way to solve this would be to use objects - we will cover this
// in about 2 weeks.

// artwork for our background layers
let artworkLayer01;
let artworkLayer02;
let artworkLayer03;
let artworkLayer04;

// some of the layers should move (scroll) - here's the speed we should use
layer02Speed = 0.1;
layer03Speed = 0.5;
layer04Speed = 1.0;
layer05Speed = 3.0;

// because we need to have the image scroll we will need to draw two copies of it to the screen at a time
// the first copy will start at x=0, the second will start at x=1024 (right next to one another)
layer02x1 = 0;
layer02x2 = 1024;
layer03x1 = 0;
layer03x2 = 1024;
layer04x1 = 0;
layer04x2 = 1024;
layer05x1 = 0;
layer05x2 = 1024;

function preload() {
  artworkLayer01 = loadImage('layer01.png');
  artworkLayer02 = loadImage('layer02.png');
  artworkLayer03 = loadImage('layer03.png');
  artworkLayer04 = loadImage('layer04.png');
  artworkLayer05 = loadImage('layer05.png');
}

function setup() {
  createCanvas(1024, 768);
}

function draw() {
  // layer 01 doesn't move!
  image(artworkLayer01, 0, 0, width, height);



  // draw layer02 at its two x positions (right next to one another)
  image(artworkLayer02, layer02x1, 0, width, height);
  image(artworkLayer02, layer02x2, 0, width, height);

  // move both of these copies based on the layer speed
  layer02x1 -= layer02Speed;
  layer02x2 -= layer02Speed;

  // if the first copy goes fully off the screen to the left
  if (layer02x1 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer02x1 = layer02x2 + width;
  }

  // if the second copy goes fully off the screen to the left
  if (layer02x2 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer02x2 = layer02x1 + width;
  }

  // same idea with layer03

  // draw layer03 at its two x positions (right next to one another)
  image(artworkLayer03, layer03x1, 0, width, height);
  image(artworkLayer03, layer03x2, 0, width, height);

  // move both of these copies based on the layer speed
  layer03x1 -= layer03Speed;
  layer03x2 -= layer03Speed;

  // if the first copy goes fully off the screen to the left
  if (layer03x1 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer03x1 = layer03x2 + width;
  }

  // if the second copy goes fully off the screen to the left
  if (layer03x2 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer03x2 = layer03x1 + width;
  }


  // same idea with layer04

  // draw layer04 at its two x positions (right next to one another)
  image(artworkLayer04, layer04x1, 0, width, height);
  image(artworkLayer04, layer04x2, 0, width, height);

  // move both of these copies based on the layer speed
  layer04x1 -= layer04Speed;
  layer04x2 -= layer04Speed;

  // if the first copy goes fully off the screen to the left
  if (layer04x1 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer04x1 = layer04x2 + width;
  }

  // if the second copy goes fully off the screen to the left
  if (layer04x2 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer04x2 = layer04x1 + width;
  }


  // same idea with layer05

  // draw layer05 at its two x positions (right next to one another)
  image(artworkLayer05, layer05x1, 0, width, height);
  image(artworkLayer05, layer05x2, 0, width, height);

  // move both of these copies based on the layer speed
  layer05x1 -= layer05Speed;
  layer05x2 -= layer05Speed;

  // if the first copy goes fully off the screen to the left
  if (layer05x1 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer05x1 = layer05x2 + width;
  }

  // if the second copy goes fully off the screen to the left
  if (layer05x2 <= -width) {
    // teleport it so that it now appears on the right side of the other copy
    layer05x2 = layer05x1 + width;
  }
}
