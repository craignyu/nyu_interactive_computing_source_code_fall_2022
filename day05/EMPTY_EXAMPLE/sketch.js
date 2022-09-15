// variable for our sound
let music;

function preload() {
  // load our sound
  music = loadSound('sounds/pokemon_theme.mp3');
}

function setup() {
  createCanvas(500,500);
  background(128);
}

function draw() {

}

function keyPressed() {
  if (music.isPlaying() == false && key == 'A') {
    music.play();
  }
  if (music.isPlaying() == true && key == 'S') {
    music.stop();
  }
}
