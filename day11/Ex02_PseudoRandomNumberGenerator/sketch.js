// reference to new pseudo random number generator
let numberGenerator;

function setup() {
  createCanvas(500,500);
  noStroke();
  background(128);

  // create our psuudo random number generator
  numberGenerator = new PRNG();
}

function draw() {
  // use our number generator to pick pseudo random numbers (instead of using
  // the built in one provied by p5)
  let x = numberGenerator.random(100,400);
  let y = numberGenerator.random(100,400);

  fill(numberGenerator.random(255), numberGenerator.random(255), numberGenerator.random(255));
  ellipse(x,y,5,5);
}



// a simple pseudo random number generator written from scratch
// adapted from: https://gist.github.com/blixt/f17b47c62508be59987b
class PRNG {

  constructor(s) {
    // use the provided seed value or the current time
    if (s) {
      this.seed(s);
    }
    else {
      this.seed(Date.now());
    }
  }

  // sets the seed value
  seed(s) {
    // ensure that the seed value is positive in the range [0, 2147483647)
    this.seed = s % 2147483647;
    if (this.seed <= 0) {
      this.seed += 2147483646;
    }
  }

  // generates a pseudo random number in the range [0, 1)
  next() {
    // advance the seed by multiplying it by a scalar and then modding
    // it down to a number in the range [0, 2147483647)
    // note: 2147483648 is 2^31, so we are modding by 2^31-1
    //       16807 is an arbitrary value to provide some variety to the output
    this.seed = this.seed * 16807 % 2147483647;

    // normalize it to the range [0, 1) and send it back
    return this.seed / 2147483647;
  }

  // returns a scaled float just like the p5 'random' function
  random(a,b) {

    // usage #1: two arguments provided, generate a number in the range [a,b)
    if (a && b) {
      return this.next()*(b-a) + a;
    }

    // usage #2: one argument provided, generate a number in the range [0,a)
    if (!b) {
      return this.next()*a;
    }

    // usage #3: no arguments provided, generate a number in the range [0,1)
    return this.next();
  }

}
