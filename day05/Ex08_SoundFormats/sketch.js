// declare our sound variable
var song;

function preload() {
  // tell the browser that we have made available both OGG and MP3 files
  soundFormats('ogg', 'mp3');

  // if an mp3 is not supported by this browser, loadSound will load 
  // the OGG file instead
  song = loadSound('boing.mp3');
}

function setup() {
  createCanvas(100, 100);

  // play our sound
  song.play();
  
  // set our background color
  background(0,255,0);
}

function draw() {
}