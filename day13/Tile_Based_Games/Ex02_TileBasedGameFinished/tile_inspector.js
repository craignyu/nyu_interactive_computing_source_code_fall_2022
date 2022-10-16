let tilesetArtwork;
let tileSize = 32;
let xOffset = 0;
let yOffset = 0;
let cursorX = 0;
let cursorY = 0;
let htmlElement;

function preload() {
  tilesetArtwork = loadImage('ProjectUtumno_full.png');
}

function setup() {
  createCanvas(640,480);
  stroke(0,255,0);
  strokeWeight(3);
  noFill();
  htmlElement = document.getElementById("tileId");
  frameRate(10);
}

function draw() {
  background(0);
  image(tilesetArtwork, xOffset, yOffset);
  rect(cursorX, cursorY, tileSize, tileSize);

  if (keyIsPressed) {
    handleKeys();
  }
}

function handleKeys() {
  if (key == 'D' || key == 'd') {
    if (cursorX + abs(xOffset) < tilesetArtwork.width - tileSize) {
      if (cursorX >= width-tileSize) {
        xOffset -= tileSize;
      }
      else {
        cursorX += tileSize;
      }
    }
  }

  if (key == 'A' || key == 'a') {
    if (cursorX + abs(xOffset) > 0) {
      if (cursorX <= 0) {
        xOffset += tileSize;
      }
      else {
        cursorX -= tileSize;
      }
    }
  }

  if (key == 'S' || key == 's') {
    if (cursorY + abs(yOffset) < tilesetArtwork.height - tileSize) {
      if (cursorY >= height-tileSize) {
        yOffset -= tileSize;
      }
      else {
        cursorY += tileSize;
      }
    }
  }

  if (key == 'W' || key == 'w') {
    if (cursorY + abs(yOffset) > 0) {
      if (cursorY <= 0) {
        yOffset += tileSize;
      }
      else {
        cursorY -= tileSize;
      }
    }
  }

  console.log("x: " + int( (cursorX + abs(xOffset)) / tileSize ));
  console.log("y: " + ((cursorY+abs(yOffset) ) / tileSize) * (tilesetArtwork.width/tileSize));
  htmlElement.innerHTML = int( (cursorX + abs(xOffset)) / tileSize ) + ((cursorY+abs(yOffset) ) / tileSize) * (tilesetArtwork.width/tileSize);
}

function drawTile(i, xPos, yPos) {
  let x = int(i % (tilesetArtwork.width/tileSize)) * tileSize;
  let y = int(i / (tilesetArtwork.width/tileSize)) * tileSize;
  image(tilesetArtwork, xPos, yPos, scaleSize, scaleSize, x, y, tileSize, tileSize);
}
