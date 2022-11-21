// variable to hold a reference to our A-Frame world
let world;

// dynamic texture buffer
let buffer, texture;

// mouse click control
let mouseCooldown = false;

// our robot array
let theRobots = []

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');
	world.setBackground(128,200,256);

	// have the user floating above the world
	world.setUserPosition(0,25,0);

	// create our off screen graphics buffer & texture
	buffer = createGraphics(512, 512);
	texture = world.createDynamicTextureFromCreateGraphics(buffer);

	// floor for the robots to race around on
	let floor = new Plane({
		width: 100,
		height: 100,
		asset: 'stone',
		repeatX: 100,
		repeatY: 100,
		rotationX: -90
	});
	world.add(floor);

	// create a control panel that the user can click on
	let panel = new Plane({
		width: 3, height: 3,
		x: 0, y: 25, z: -5,
		dynamicTexture: true,
		asset: texture,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512,
		overFunction: function(entity, intersectionInfo) {
			// intersectionInfo is an object that contains info about how the user is
			// interacting with this entity.  it contains the following info:
			// .distance : a float describing how far away the user is
			// .point3d : an object with three properties (x, y & z) describing where the user is touching the entity
			// .point2d : an object with two properites (x & y) describing where the user is touching the entity in 2D space (essentially where on the dynamic canvas the user is touching)
			// .uv : an object with two properies (x & y) describing the raw textural offset (used to compute point2d)

			// if the mouse is currently pressed we should create a Robot here on the floor
			if (mouseIsPressed) {
				mouseCooldown = true;
				theRobots.push( new Robot(intersectionInfo.point2d.x, intersectionInfo.point2d.y) );
			}
		}
	});
	world.add(panel);

	// when clicked this will remove all Robots from the world
	let clearButton = new Sphere({
		red: 255, green: 0, blue: 0,
		radius: 0.5,
		x: 0, y: 23, z: -4,
		clickFunction: function(entity) {
			while (theRobots.length > 0) {
				theRobots[0].removeFromWorld();
				theRobots.splice(0, 1);
			}
		}
	});
	world.add(clearButton);
}

function draw() {
	// update our control panel & move all robots
	buffer.clear();
	buffer.background(0);
	for (let i = 0; i < theRobots.length; i++) {
		theRobots[i].move();
		theRobots[i].updateControlPanel();
	}
}

// our Robot class that will randomly wander
class Robot {

	constructor(_x, _z) {

		// convert from buffer coords (512x512) to world coords (100x100)
		this.x = map(_x, 0, 512, -50, 50);
		this.z = map(_z, 0, 512, -50, 50);

		// pick a color for this robot
		this.r = random(255);
		this.g = random(255);
		this.b = random(255);

		// construct a 3D body for this robot
		this.body = new Box({
			x: this.x,
			y: 0.5,
			z: this.z,
			red: this.r, green: this.g, blue: this.b,
			width: 1, height: 1, depth: 1
		});
		world.add(this.body);

		// pick a destination
		this.destX = random(-50, 50);
		this.destZ = random(-50, 50);
	}

	updateControlPanel() {
		// update the buffer with our current position
		buffer.fill(this.r, this.g, this.b);
		buffer.rectMode(CENTER);

		// convert back out to buffer coords
		let bufferX = map(this.x, -50, 50, 0, 512);
		let bufferY = map(this.z, -50, 50, 0, 512)
		buffer.rect(bufferX, bufferY, 20, 20);
	}

	move() {
		// go towards our destination
		if (this.x < this.destX) {
			this.x += 0.1;
		}
		else {
			this.x -= 0.1;
		}

		if (this.z < this.destZ) {
			this.z += 0.1;
		}
		else {
			this.z -= 0.1;
		}

		// update our position
		this.body.setPosition(this.x, 0.5, this.z);

		// have we arrived?  if so, pick a new destination
		if (dist(this.x, this.z, this.destX, this.destZ) < 1) {
			this.destX = random(-50,50);
			this.destZ = random(-50,50);
		}
	}

	removeFromWorld() {
		// remove this robot's body from the world
		world.remove(this.body);
	}

}
