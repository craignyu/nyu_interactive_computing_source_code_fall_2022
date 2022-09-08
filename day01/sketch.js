function setup() {
  // set the background size of our canvas
  createCanvas(400, 400);

  // erase the background with a "grey" color
  background(100);

  // set all content drawn from this point forward
  // so that it uses "white" (0 = black, 255 = white)
  fill(255);

  // write some text at position 100,100
  text("Hello, World!", 100,100);

  // draw a rectangle at position 100,200
  // size = 50x50
  rect(100,200,50,50);

  // draw an ellipse at 200,200
  // radius = 25
  ellipse(200,200, 25, 25);
}
