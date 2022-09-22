function setup() {
  // create our canvas and give it an id of 'p5canvas'
  let cnv = createCanvas(1000,1000);
  cnv.id('p5canvas');

  // important! update the inline CSS
  cnv.style('width', '');
  cnv.style('height', '');

  noStroke();
  background(0);
}

function draw() {
  background(0,10);
  fill(random(255),random(255),random(255));
  ellipse(random(20,width-20),random(20,height-20),40,40)
}
