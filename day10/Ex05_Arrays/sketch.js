function setup() {
  createCanvas(300,300);
  text("Check the console!", width/2, height/2);
  noLoop();
}

// create an empty array
let array1 = [];

// create an array with 3
// integer values
let myArray = [5, 10, 3];

// accessing arrays by position
console.log( myArray[0] ); // 5
console.log( myArray[1] ); // 10
console.log( myArray[2] ); // 3
//console.log( myArray[3] ); // ERROR

// add an element to the array
myArray.push("foo");
console.log(myArray);

// remove the value 3 from the array
// syntax: splice(indexToRemove, numberOfElementsToRemove)
myArray.splice(1,1);

// report how big the array is
console.log( myArray.length );
