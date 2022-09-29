// image assets
let user_left, user_right;
let enemy_left, enemy_right;
let floor_background;
let key_graphic;

// preload assets
function preload() {
  user_left = loadImage('images/user_left.png');
  user_right = loadImage('images/user_right.png');
  enemy_left = loadImage('images/enemy_left.png');
  enemy_right = loadImage('images/enemy_right.png');
  floor_background = loadImage('images/floor_background.jpg');
  key_graphic = loadImage('images/key_graphic.png');
}

function setup() {
  createCanvas(500, 500);

  // all images should be drawn from their center points
  imageMode(CENTER);
}

function draw() {
  // note - we are drawing all images from their center points in this sketch,
  // not their top left points
  image(floor_background, 250, 250);


}
