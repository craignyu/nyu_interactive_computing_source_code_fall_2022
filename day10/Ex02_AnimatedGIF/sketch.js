// variable to hold our GIF
let pokemon;

function preload() {
  // load in our GIF
  // https://www.pinterest.com/pin/409546159847195574/ (CC license)
  pokemon = loadImage('../_images/pokeball.gif');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  // draw our GIF at 4 spots on the page
  image(pokemon, 0, 0, 150, 100);
  image(pokemon, 0, 100, 150, 100);
  image(pokemon, 150, 0, 150, 100);
  image(pokemon, 150, 100, 150, 100);

  text(pokemon.getCurrentFrame() + " out of " + pokemon.numFrames(), 20, 220);
}

function keyPressed() {
  // pause the GIF
  if (key == 'S' || key == 's') {
    pokemon.pause();
  }

  // rewind the GIF
  if (key == 'R' || key == 'r') {
    pokemon.setFrame(0);
  }

  // resume playing the GIF
  if (key == 'P' || key == 'p') {
    pokemon.play();
  }
}
