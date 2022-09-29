function setup() {
  createCanvas(500,500);
  text("Nothing to see! Check the JavaScript Console", 25, 25);

  // you can define an object using curly braces, like this:
  let myObject1 = {};

  // objects are made up of properties & values, which are described like this
  let myObject2 = {
                    name: 'Pikachu',
                    type: 'Electricity'
                  };

  // you can access a property on an object using dot syntax, like this:
  console.log( myObject2.name );  // Pikachu

  // objects can store any data type, including other objects.  property names
  // must be unique, but property values can be duplicated.
  let myObject3 = {
                    name: 'Charmander',
                    type: 'Fire',
                    age: 7,
                    hitPoints: 100,
                    active: true,
                    moves: {
                      main: 'flamethrower',
                      special: 'fire twirl'
                    }
                  };

  console.log( myObject3.name );  // Charmander
  console.log( myObject3.hitPoints ); // 100
  myObject3.hitPoints += 5;
  console.log( myObject3.hitPoints ); // 105
  console.log( myObject3.moves.main );  // flamethrower


  // objects can also contain functions.  these functions can refer back
  // to the object itself and access properties of the object using the 'this' keyword

  let myObject4 = {
                    name: 'Squirtle',
                    type: 'Water',
                    sayHi: function() {
                      console.log("Hi, my name is: " + this.name);
                    }
                  };

  myObject4.sayHi();  // Hi, my name is: Squirtle
}

function draw() {
}
