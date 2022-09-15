function setup() {
  createCanvas(500, 500);
}

function draw() {
  // make a variable called 'r' to compute how much redness we need in our color
  // we will use the mouse's X position to compute this
  // the 'map' function can re-map from one range to another - here's how to read this:
  // (1) we are examining the current value of mouseX
  // (2) the lowest possible value of mouseX is 0
  // (3) the highest possible value of mouseX is 500 (width of canvas)
  // (4) the lowest possible value we WANT r to be is 0
  // (5) the highest possible value we WANT r to be is 255
  let r = map(mouseX, 0, 500, 0, 255);

  // do the same with mouseY and the greenness of the canvas
  let g = map(mouseY, 0, 500, 0, 255);

  // draw the background using our new color
  background(r,g,255);

  text("'r' is:" + r + " (mapped from " + mouseX + ")", 20, 20);
  text("'g' is:" + g + " (mapped from " + mouseY + ")", 20, 40);
}
