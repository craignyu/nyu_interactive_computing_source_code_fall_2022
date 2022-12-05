let artwork;

function preload() {
  // load our artwork
  artwork = loadImage('images/monalisa.jpg');
}

function setup() {
  createCanvas(640, 480);

  // draw the image to the canvas one time
  background(0);
  image(artwork, 0, 0);
}

function draw() {
}

function keyPressed() {
  // based on the key the user presses we can apply a visual effect to our image
  if (keyCode == 82) {
    background(0);

    // tell all images to draw 100% in the red channel, 0% in all other channels
    tint(255,0,0);
    image(artwork, 0, 0);
  }
  else if (keyCode == 71) {
    background(0);

    // tell all images to draw 100% in the green channel, 0% in all other channels
    tint(0,255,0);
    image(artwork, 0, 0);
  }
  else if (keyCode == 66) {
    background(0);

    // tell all images to draw 100% in the blue channel, 0% in all other channels
    tint(0,0,255);
    image(artwork, 0, 0);
  }
  else if (keyCode == 87) {
    background(0);

    // tell all images to draw 100% in all channels (image will appear as normal)
    tint(255,255,255);
    image(artwork, 0, 0);
  }
}
