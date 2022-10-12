// array to hold our points
let points = [];

// how far apart the points should be
let spacing = 30;

// setup function - used for commands that need to run only once
function setup() {
  createCanvas(500,100);
  noStroke();
  background(0);

  // how many points can we fit on the canvas?
  let numPoints = width / spacing;

  // construct an array of random points
  for (let i = 0; i < numPoints; i++) {
    points.push(random(0,100));
  }
}

// draw function - used for commands that need to be repeated
function draw() {
  background(0, 10);

  // draw all of the points
  for (let i = 0; i < points.length; i++) {
    fill(255);
    ellipse(i*spacing, points[i], 5, 5);
  }

  // figure out the array elements on either side of the mouse's X position
  let iLeft = int(mouseX / spacing);
  let iRight = iLeft + 1

  // use a cubic easing function to interpolate the y values between the points
  let yPosition = easeInOut(mouseX, iLeft*spacing, iRight*spacing, points[iLeft], points[iRight]);

  // draw the interpolated value
  fill(0,255,0);
  ellipse(mouseX, yPosition, 5, 5);
}


// cubic easing function (same syntax as the 'map' function)
// derived from:  https://github.com/sighack/easing-functions/blob/master/code/easing/easing.pde
function easeInOut(value, start1, stop1, start2, stop2) {
  let b = start2;
  let c = stop2 - start2;
  let t = value - start1;
  let d = stop1 - start1;
  let p = 0.5;

  t /= d/2;
  if (t < 1) {
    return c/2*t*t*t + b;
  }
  t -= 2;
  return c/2*(t*t*t + 2) + b;
}
