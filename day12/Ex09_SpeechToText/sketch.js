/* note: this demo requires you to have included the p5.speech.js library in your
         index.html file.  you will also probably need to load your page over https
         or localhost
*/

let myRec;

function setup() {
	createCanvas(500, 500);

  // create speech to text object
  myRec = new p5.SpeechRec();

  // set up our recorder to constantly monitor the incoming audio stream
  myRec.continuous = true; // do continuous recognition

  // allow partial results - this will detect words as they are said and will
  // call the parse function as soon as a word is decoded
  // when a pause in conversation occurs the entire string will be sent
  // to the parse function
  myRec.interimResults = true;

  // define our parse function (called every time a word/phrase is detected)
	myRec.onResult = parseResult;

  // start the recording engine
	myRec.start();
}

function draw() {
}

// called every time a word/phrase is detected
function parseResult() {
  background(255);

  // myRec.resultString is the current result
  text(myRec.resultString, 25, 25);
  console.log(myRec.resultString);
//		let mostrecentword = myRec.resultString.split(' ').pop();
}
