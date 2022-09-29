function setup() {
  createCanvas(500,500);
  text("Nothing to see! Check the JavaScript Console", 25, 25);

  // set a1 equal to the RETURN VALUE of demoFunction1
  let a1 = demoFunction1("a1");

  // when we print a1 we will see that it contains the return value supplied by a1
  console.log("a1 is holding the value: " + a1);

  // set a2 equal to the FUNCTION demoFunction1
  let a2 = demoFunction1;

  // we can now call a2 - it is a "shortcut" that is pointing to the demoFunction1 function
  a2("a2a");

  // we can capture its return value too
  let a2returnValue = a2("a2b");
  console.log("a2returnValue is holding the value: " + a2returnValue);

  // inspect the data type of a2 - you will see that is of type function
  console.log("a2 is of data type: " + typeof(a2) );
}

function draw() {
}

function demoFunction1(arg) {
  console.log("Just called demoFunction1 with argument: " + arg);
  return "all done!";
}
