let xOffset = 0;
let yOffset = 0;
let scalingFactor = 0.005;

function setup() {
  createCanvas(500,500);
  noiseDetail(24);
  drawWorld();
}

function draw() {
  if (keyIsDown(RIGHT_ARROW)) {
    // update our offset and redraw the world
    xOffset += 15;
    drawWorld();
  }
  if (keyIsDown(LEFT_ARROW)) {
    // update our offset and redraw the world
    xOffset -= 15;
    drawWorld();
  }
  if (keyIsDown(UP_ARROW)) {
    // update our offset and redraw the world
    yOffset -= 15;
    drawWorld();
  }
  if (keyIsDown(DOWN_ARROW)) {
    // update our offset and redraw the world
    yOffset += 15;
    drawWorld();
  }
}


// draw the world by sampling the 2D perlin noise landscape
function drawWorld() {
  background(0);

  for (let x = 0; x < width; x+=5) {
    for (let y = 0; y < height; y+=5) {
      let noiseValue = noise( (x+xOffset)*scalingFactor, (y+yOffset)*scalingFactor);
      // turn this into a map!
      // water
      let c;
      if (noiseValue < 0.4) {
        c = map(noiseValue, 0, 0.5, 64, 255)
        fill(0,0,c);
      }
      // grasslands
      else if (noiseValue < 0.7) {
        c = map(noiseValue, 0.4, 0.7, 255, 128)
        fill(0,c,0);
      }
      // mountains
      else {
        c = map(noiseValue, 0.7, 1.0, 128, 255)
        fill(c);
      }
      noStroke();
      rect(x,y,10,10);
    }
  }
}
