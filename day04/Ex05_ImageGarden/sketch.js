// a holder variable for our graphics
let flower1, flower2, flower3, scene;

// preload is called before any other functions
// ALL function calls within preload must complete before setup gets called
// we generally use this function to handle all of our file loads (images, sounds, etc)
function preload() {
  // load our images
  flower1 = loadImage("flower-1.png");
  flower2 = loadImage("flower-2.png");
  flower3 = loadImage("flower-3.png");
  scene = loadImage("scene.jpg");
}

function setup() {
  createCanvas(640, 480);

  // draw our scene
  image(scene, 0, 0);
}

function draw() {
}

function mousePressed() {
  // see which flower needs to be "planted"
  let chance = random(0, 100);

  if (chance < 33) {
    image(flower1, mouseX, mouseY);
  }
  else if (chance < 66) {
    image(flower2, mouseX, mouseY);
  }
  else {
    image(flower3, mouseX, mouseY);
  }
}

function keyPressed() {
  // save the scene
  if (key == 'S') {
    save('masterpiece.png');
  }

  // clear the scene
  else if (key == 'C') {
    image(scene, 0, 0);
  }
}
