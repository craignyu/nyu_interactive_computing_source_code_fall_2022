// our VR world object
let world;

let thing;
let speed = 0.05;

function setup() {
  // no canvas needed
  noCanvas();

  // create a VR World (tell it to look for the 'VRScene' id for our scene tag)
  world = new World('VRScene');

  // set a background color (RGB)
  world.setBackground(128, 200, 240);

  // make a floor
  let floor = new Plane({
    x: 0,
    y: 0,
    z: 0,
    width: 100,
    height: 100,
    rotationX: -90,
    asset: 'stonebrick',
    repeatX: 100,
    repeatY: 100
  });
  world.add(floor);

  // create a bunch of randomly positioned boxes
  for (let i = 0; i < 100; i++) {

    let temp = new Box({
      x: random(-50, 50),
      y: 0,
      z: random(-50, 50),
      red: random(255),
      green: random(255),
      blue: random(255),
      width: 1,
      height: random(0.5, 5),
      depth: 1
    });
    world.add( temp );

  }

}

function draw() {



}
