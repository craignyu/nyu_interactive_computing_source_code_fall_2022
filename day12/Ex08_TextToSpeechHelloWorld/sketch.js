/* note: this demo requires you to have included the p5.speech.js library in your
         index.html file.  you will also probably need to load your page over https
         or localhost
*/

// create a variable to hold our voice object
let myVoice;

// an array of things to say
let words = ['Hello, world!', 'Pokemon are cool', 'I like p 5', 'Hello NYU Students', 'Interactive Computing', 'I am a robot', 'Take me to your leader.', "That's all, folks"];

function setup() {
  createCanvas(500,500);

  // create our voice object
  myVoice = new p5.Speech();
}

function draw() {

}

function mousePressed() {
  myVoice.speak("Class is halfway over and I'm not even close to being done!")
}

function keyPressed() {
  background(255);

  // if they press the 'V' key we can switch to a different voice!
  if (key == 'V' || key == 'v') {
    // check out the console - this will print out the names of all voices
    myVoice.listVoices();

    // pick one of these voices at random
    // you can access voices as an array through the variable myVoice.voices
    let voiceId = int(random(myVoice.voices.length));
    myVoice.setVoice(voiceId);
    text("Setting voice #: " + voiceId, 25, 50);
  }

  // say something!  pick a phrase at random from our array
  let id = int(random(0, words.length));
  myVoice.speak( words[id] );

  // write the word to the screen
  fill(0);
  text( words[id], 25, 25 );
}
