// variable to keep track of how many times the user has clicked the screen
let currentClicks = 0;

function setup() {
  createCanvas(500, 500);
  background(0);

  // localStorage is browser-based storage
  // every domain that you visit has the ability to
  // store approx. 15mb of data in your browser's cache
  // you can set and retrieve strings from this cache
  // from pages that are served off of the same domain.
  // note that this type of storage is semi-permanant -
  // the user can choose to clear their cache at any time,
  // but they often don't :)

  // step 1: consult localStorage to see if anything
  // is there at the moment under the name 'clicks'
  currentClicks = window.localStorage.getItem('clicks');

  // if this comes back as null that means there is no
  // entry by this name - we can set it with a default value
  if (currentClicks == null) {
    // set the value to be 1 (the current # of clicks)
    window.localStorage.setItem('clicks', 1);

    // set our global variable equal to 1 as well
    currentClicks = 1;
  }

  // otherwise we have a value!
  else {
    // localStorage will provide values to you in the form of strings
    // but we need currentClicks to be an integer
    currentClicks = int(currentClicks);
  }
}

function draw() {
  // display the total # of clicks to the screen
  background(0);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(255);
  text("# of clicks:", width/2, height/2 - 50);
  text(currentClicks, width/2, height/2);
}

function mousePressed() {

  // increment it our total # of clicks
  currentClicks += 1;

  // store it back into localStorage
  localStorage.setItem('clicks', currentClicks);

}
