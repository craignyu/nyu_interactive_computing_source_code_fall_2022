let xOffset = 0.01;
let yOffset = 0.01;
let c;
const cellSize = 10

function setup() {
  createCanvas(500, 500);
  noiseDetail(24);
  noStroke();
}

function draw() {

  for (let x = 0; x < 500; x += cellSize) {
    for (let y = 0; y < 500; y += cellSize) {
      c = map(noise(xOffset + x / 100.0, yOffset + y / 100.0), 0, 1, 0, 255);
      fill(c);
      rect(x, y, cellSize, cellSize);
    }
  }


  xOffset += map(mouseX, 0, width, -0.1, 0.1);
  yOffset += map(mouseY, 0, height, -0.1, 0.1);

  fill(255);
  rect(0, 0, 100, 20);
  fill(0);
  text(int(xOffset*100)/100 + ", " + int(yOffset*100)/100, 10, 10);
}
