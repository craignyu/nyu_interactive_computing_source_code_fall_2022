// variable to hold a reference to our A-Frame world
let world;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set a background color for the world using RGB values
	world.setBackground(173, 216, 230);

	// decide if you want to allow the user to fly or be stuck on the ground
	// if you disallow flying the user can only move in the X & Z axes
	// the default is to disallow flying - world.setFlying(false)
	world.setFlying(true);

	// what textures can we choose from?
	var textures = ['iron', 'gold', 'stone'];

	// create lots of boxes
	for (var i = 0; i < 150; i++) {
		// pick a location
		var x = random(-50, 50);
		var z = random(-50, 50);

		// pick a random texture
		var t = textures[ int(random(textures.length)) ];

		// create a box here
		var b = new Box({
							x:x,
							y:0.5,
							z:z,
							asset:t
		});

		// add the box to the world
		world.add(b);
	}

	// create a plane to serve as our "ground"
	var g = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'stone',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90, metalness:0.25
					   });

	// add the plane to our world
	world.add(g);
}

function draw() {
	// always move the player forward a little bit - their movement vector
	// is determined based on what they are looking at
  //	world.moveUserForward(0.05);

	// note that you can also only trigger movement when the mouse is down or the user
	// is touching the screen
	if (mouseIsPressed) {
		world.moveUserForward(0.05);
	}

	// wrap around!

	// step 1: get the user's position
	// this is an object with three properties (x, y and z)
	var pos = world.getUserPosition();

	// now evaluate
	if (pos.x > 50) {
		world.setUserPosition(-50, pos.y, pos.z);
	}
	else if (pos.x < -50) {
		world.setUserPosition(50, pos.y, pos.z);
	}
	if (pos.z > 50) {
		world.setUserPosition(pos.x, pos.y, -50);
	}
	else if (pos.z < -50) {
		world.setUserPosition(pos.x, pos.y, 50);
	}
}
