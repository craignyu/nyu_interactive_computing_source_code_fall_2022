// declare a holder variable for our sound
var song;

function preload() {
  // preload our sound
  song = loadSound("pokemon_theme.mp3");
}

function setup() {
  createCanvas(100, 100);

  // play our sound when the sketch starts
  song.play();

  background(0);
  fill(255);
  text("Listen!", 20, 20);
}

function draw() {
}
