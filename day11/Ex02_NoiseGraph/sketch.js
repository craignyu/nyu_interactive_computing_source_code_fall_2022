// keep track of our position on our graph
let xPos = 0;

// keep track of the previous random point
let prev = 50;

// noise offset
let noiseOffset = 0;

// how fast should we move along the noise curve
let step = 0.01;

// off screen buffers (for moving the random graph)
let buffer1, buffer2;
let buffer1x = 0;
let buffer2x = 1000;
let currentBuffer, nextBuffer;;
let moving = false;

let minh = false;
let maxh = false;

function setup() {
  createCanvas(500, 150);

  // create our off screen buffers
  buffer1 = createGraphics(1000,150);
  buffer2 = createGraphics(1000,150);
  buffer1.background(200);
  buffer2.background(200);
  currentBuffer = buffer1;
  nextBuffer = buffer2;

  noiseDetail(24);
}

function draw() {
  // clear the main canvas
  clear();

  // move the drawing head over by 1 pixel
  xPos += 1;

  // consult the noise graph at this location
  let noiseHeight = noise( noiseOffset );
  if (minh == false) {
    minh = noiseHeight;
  }
  if (maxh == false) {
    maxh = noiseHeight;
  }
  if (noiseHeight < minh) {
    minh = noiseHeight;
  }
  if (noiseHeight > maxh) {
    maxh = noiseHeight;
  }

  // scale that into a number between 0 and 100
  let rand = map(noiseHeight, 0, 1, 0, 100);

  // move along the noise graph by a small amount
  noiseOffset += step;

  // draw a line from the previous point to the current point
  currentBuffer.line(xPos-1, prev, xPos, rand);

  if (frameCount % 120 == 0) {
    currentBuffer.text("time:   " + nf(noiseOffset, 0, 2), xPos, 125);
    currentBuffer.text("height: " + nf(noiseHeight, 0, 2), xPos, 135);
  }

  // rand becomes our new prev
  prev = rand;

  // if we are moving we need to cycle the two buffers so they function like
  // a scrolling background
  if (moving) {
    buffer1x--;
    buffer2x--;
    if (buffer1x <= -1000) {
      buffer1x = buffer2x+1000;
      buffer1.background(200);
    }
    else if (buffer2x <= -1000) {
      buffer2x = buffer1x+1000;
      buffer2.background(200);
    }
  }

  // did we reach the edge of the visible canvas (500)? if so, we need to start
  // the movement of the buffers
  if (xPos >= 500) {
    moving = true;
  }

  // draw the buffers
  image(buffer1, buffer1x, 0);
  image(buffer2, buffer2x, 0);

  // did we reach the right side of the current buffer?
  if (xPos >= 1000) {
    // put us into 'move' mode
    moving = true;

    // reset the drawing head
    xPos = 0;

    // select a new buffer to draw to
    if (currentBuffer == buffer1) {
      currentBuffer = buffer2;
      nextBuffer = buffer1;
    }
    else {
      currentBuffer = buffer1;
      nextBuffer = buffer2;
    }
  }
}

function changeStep(a) {
  step = float(a.value);
  document.querySelector('#current_step').innerText = 'Current Step: ' + step;
}
