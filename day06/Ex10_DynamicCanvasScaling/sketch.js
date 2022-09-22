function setup() {
  // create a canvas with the current size of the
  // browser window
  let cnv = createCanvas(1000, 1000);

  // apply an inline style to the canvas
  // note that we have to do this as an inline style
  // because p5 sets an inline style on the canvas
  // element by default.  setting an embedded
  // style at the top of the page won't be specific
  // enough, so in order to override p5's style
  // the new rule must be inline as well
  cnv.style('width', '100%');
  cnv.style('height', '100%');
}

function draw() {
  fill(random(255), random(255), random(255));
  ellipse(random(50,width-50), random(50, height-50), 50, 50);
}
