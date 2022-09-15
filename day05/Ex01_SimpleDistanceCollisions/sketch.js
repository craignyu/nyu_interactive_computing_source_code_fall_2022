// artwork
var mario, mario_blue;

function preload() {
  mario = loadImage("mario.png");
  mario_blue = loadImage("mario_blue.png");
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
}

function draw() {
  background(0);

  // draw our character (a bitmap) to the center of the screen
  image(mario, 250, 250);

  // draw our collision ellipse (just to help visualize what's going on)
  fill(255, 50);
  noStroke();
  ellipse(250, 250, 100, 100);

  // draw our user controlled character (blue mario) on top of the mouse
  image(mario_blue, mouseX, mouseY);

  // draw our collision ellipse (just to help visualize what's going on)
  fill(255, 50);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);

  // draw a line to wherever the mouse is
  stroke(0,255,0);
  line(250,250, mouseX, mouseY);

  // compute the distance from the mouse to the center of the actor
  var d = dist(mouseX, mouseY, 250, 250);

  // report this distance to the user
  fill(255);
  noStroke();
  text("Distance to actor: " + d, 20, 20);

  // determine if a collision happened - note that we are using the number
  // 100 here since that's the sum of the two radius values (50 for the static
  // actor and 50 for the user controlled actor)
  if (d < 100) {
    text("Collision!", 20, 40);
  }
}
