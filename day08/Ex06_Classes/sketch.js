function setup() {
  createCanvas(500,500);
  text("Nothing to see! Check the JavaScript Console", 25, 25);

  // build a new object using the Pokemon1 class - the object being created is stored in the variable 'a'
  let a = new Pokemon1();
  console.log(a); // the whole object that was built using the class

  console.log(a.name);  // Pikachu
  console.log(a.hitPoints); // random number
  a.sayHi();  // Hello, my name is Pikachu
              // I have [random number] hit points



  // we can build another object using the same class
  let b = new Pokemon1();
  // update the name of this object
  b.name = 'Charmander';
  console.log(b); // the whole object built using the class
  b.sayHi();  // Hello, my name is Charmander
              // I have [random number] hit points

  console.log(a.name, b.name);  // Pikachu Charmander -- note how changing 1 object doesn't change any other object



  // now create some objects using the Pokemon2 class
  let c = new Pokemon2('Squirtle');
  let d = new Pokemon2('Bulbasaur');
  c.sayHi();
  d.sayHi();
}

function draw() {
}





// this is our 'blueprint' for a Pokemon1
// note that class are 'hoisted' just like regular functions in JavaScript, so you can safely store them outside of any function, or in a separate file
class Pokemon1 {

  // this is a constructor - this function will run when we create a new
  // object using this class. think of it like the 'setup' function in your
  // sketch, but for an object
  constructor() {
    // set up the object to have a property of 'name' and a value of 'Pikachu'
    this.name = 'Pikachu';
    // set up a 'hitPoints' property with a random value
    this.hitPoints = int( random(10,50) );
  }

  // the object should also have a sayHi function
  sayHi() {
    // when called, this function will announce the current value of
    // its name and hitPoints properties
    console.log('Hello, my name is ' + this.name);
    console.log('I have ', this.hitPoints + ' hit points');
  }
}


// constructors can also be set up to accept arguments from outside of the class
class Pokemon2 {

  // when we build a new Pokemon2 we will be sending the class the name of the desired pokemon
  constructor(desiredName) {
    this.name = desiredName;
    this.hitPoints = int(random(10,50));
  }

  sayHi() {
    console.log(this.name, this.hitPoints);
  }
}
