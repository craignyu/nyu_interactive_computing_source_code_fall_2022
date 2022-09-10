// setup function - used for commands that need to run only once
function setup() {
  createCanvas(300,100);

  // turn off strokes so we can see the fill color without any distractions
  noStroke();

  // set our color mode to HSB (Hue, Saturation, Brightness)
  // this color made makes it easier to create different shades of the same color
  colorMode(HSB);

  // create a blue fill
  // Hue is a number between 0-256, 0 being red, 128 being green, 256 being blue
  // Saturation is a percentage, 100% being the color and 0% being white
  // Brightness is a percentage, 100% being the color and 0% being black
  fill(256, 100, 100);
  rect(0,0,50,50);

  // vary the saturation slightly in the first row of colors
  fill(256, 80, 100);
  rect(50,0,50,50);

  fill(256, 60, 100);
  rect(100,0,50,50);

  fill(256, 40, 100);
  rect(150,0,50,50);

  fill(256, 20, 100);
  rect(200,0,50,50);

  fill(256, 0, 100);
  rect(250,0,50,50);


  // vary the brightness slightly in the second row of colors
  fill(256, 100, 100);
  rect(0,50,50,50);

  fill(256, 100, 80);
  rect(50,50,50,50);

  fill(256, 100, 60);
  rect(100,50,50,50);

  fill(256, 100, 40);
  rect(150,50,50,50);

  fill(256, 100, 20);
  rect(200,50,50,50);

  fill(256, 100, 0);
  rect(250,50,50,50);
}

// draw function - used for commands that need to be repeated
function draw() {

}
