// artwork for the game
let artFrogLeft, artFrogRight, artFrogUp, artFrogDown;
let artBackground;
let artCar1, artCar2, artCar3;

function preload() {
  // load in all of our graphics
  artBackground = loadImage("images/background.png");
  artFrogUp = loadImage("images/frog_up.png");
  artFrogDown = loadImage("images/frog_down.png");
  artFrogLeft = loadImage("images/frog_left.png");
  artFrogRight = loadImage("images/frog_right.png");
  artCar1 = loadImage("images/car_1.png");
  artCar2 = loadImage("images/car_2.png");
  artCar3 = loadImage("images/car_3.png");
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  // draw the background of our world
  image(artBackground, 0, 0);
}
