// variable to hold our artwork
let artwork;

// load our artwork
function preload() {
  // downloaded from:  https://opengameart.org/content/dungeon-crawl-32x32-tiles-supplemental
  artwork = loadImage('ProjectUtumno_full.png')
}


function setup(){
  createCanvas(500,500);

  // as you know, we can use the 'image' function to draw an entire image
  // but we can also use the function to extract a section of an image

  // syntax:
  // - image to draw (same as usual)
  // - x position to draw (same as usual)
  // - y position to draw (same as usual)
  // - width to draw (same as usual)
  // - height to draw (same as usual)
  // - x position WITHIN THE IMAGE to extract from
  // - y postiion WITHIN THE IMAGE to extract from
  // - # of pixels to extract in the x direction
  // - # of pixels to extract in the y direction
  image(artwork, 0, 0, 64, 64, 0, 32, 32, 32);
  image(artwork, 64, 0, 64, 64, 0, 64, 32, 32);
  image(artwork, 128, 0, 64, 64, 0, 128, 32, 32);

  noLoop();
}
