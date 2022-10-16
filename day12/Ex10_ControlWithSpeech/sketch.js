/* note: this demo requires you to have included the p5.speech.js library in your
         index.html file.  you will also probably need to load your page over https
         or localhost
*/

// our recording object
let myRec;

// current color
let r = 255;
let g = 0;
let b = 255;

// our current size
let s = 50;

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
	background(255);
	fill(r,g,b);
	ellipse(250,250,s,s);
}

// called every time a word/phrase is detected
function parseResult() {
  // myRec.resultString is the current result
  text(myRec.resultString, 25, 25);
  console.log(myRec.resultString);

	// grab the most recent word (the word on the right side of the string)
	// do this by splitting th string and then taking the right most item
	let wordArray = myRec.resultString.split(' ');
	let mostRecentWord = wordArray[ wordArray.length-1 ];

	// evaluate word
	if (mostRecentWord == "red") {
		r = 255;
		g = 0;
		b = 0;
	}
	if (mostRecentWord == "green") {
		r = 0;
		g = 255;
		b = 0;
	}
	if (mostRecentWord == "blue") {
		r = 0;
		g = 0;
		b = 255;
	}
	if (mostRecentWord == "big") {
		s += 10;
	}

	if (mostRecentWord == "small") {
		s -= 10;
	}

}
