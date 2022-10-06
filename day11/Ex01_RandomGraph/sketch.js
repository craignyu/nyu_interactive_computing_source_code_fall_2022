// keep track of our position on our graph
let xPos = 0;

// keep track of the previous random point
let prev = 50;

// off screen buffers (for moving the random graph)
let buffer1, buffer2;
let buffer1x = 0;
let buffer2x = 1000;
let currentBuffer, nextBuffer;;
let moving = false;

function setup() {
  createCanvas(500, 100);

  // create our off screen buffers
  buffer1 = createGraphics(1000,100);
  buffer2 = createGraphics(1000,100);
  buffer1.background(200);
  buffer2.background(200);
  currentBuffer = buffer1;
  nextBuffer = buffer2;
}

function draw() {
  // clear the main canvas
  clear();

  // move the drawing head over by 1 pixel
  xPos += 1;

  // pull a random number
  let rand = random(0,100);

  // draw a line from the previous point to the current point
  currentBuffer.line(xPos-1, prev, xPos, rand);

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
