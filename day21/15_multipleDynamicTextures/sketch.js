// variable to hold a reference to our A-Frame world
let world;

// to handle multiple dynamic textures we can use a series of separate variables to hold
// a few off screen graphics buffers created using the 'createGraphics' function in p5
let buffer1, buffer2, buffer3;

// we will also need three variables to hold the dynamic textures that will be created using
// these three buffers
let texture1, texture2, texture3;

function setup() {
	// no main canvas - we will just use our off screen graphics buffers to hold our dynamic textures
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set the background color of the world
	world.setBackground(0,0,0);

	// create our three off screen graphics buffers, making sure that each is set up with dimensions
	// that are a power of 2
	buffer1 = createGraphics(256, 256);
	buffer2 = createGraphics(256, 256);
	buffer3 = createGraphics(256, 256);

	// set up these graphics buffers as dynamic textures
	texture1 = world.createDynamicTextureFromCreateGraphics( buffer1 );
	texture2 = world.createDynamicTextureFromCreateGraphics( buffer2 );
	texture3 = world.createDynamicTextureFromCreateGraphics( buffer3 );

	// create three planes that will be use these textures
	let plane1 = new Plane({
		x:-4, y:1.5, z:-5,
		width:3, height:3,
		asset: texture1,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	let plane2 = new Plane({
		x:0, y:1.5, z:-5,
		width:3, height:3,
		asset: texture2,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	let plane3 = new Plane({
		x:4, y:1.5, z:-5,
		width:3, height:3,
		asset: texture3,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	// add the planes to our world
	world.add(plane1);
	world.add(plane2);
	world.add(plane3);

	// create a plane to serve as our "ground"
	let ground = new Plane({
		x:0, y:0, z:0,
		width:100, height:100,
		red: 128, green: 128, blue: 128,
		rotationX:-90
	});

	// add the ground to our world
	world.add(ground);
}

// texture 3 will implement a more complicated algorithm (a random walk)
let x = 128;
let y = 128;

function draw() {
	// here we can manipulate our three separate off screen graphics buffers, which will translate
	// into changes in the three dynamic textures in our world

	// texture1 - random black and white squares
	let s1 = random(5,30);
	buffer1.fill(random(255));
	buffer1.rect(random(0, 256), random(0,256), s1, s1);

	// texture2 - random colored ellipses
	let s2 = random(5,30);
	buffer3.background(255, 10);
	buffer2.fill(random(255), random(255), random(255));
	buffer2.ellipse(random(0, 256), random(0,256), s2, s2);

	// texture3 - random walker
	buffer3.fill(random(255));
	buffer3.noStroke();
	buffer3.ellipse( x, y, 10, 10);

	let direction = int(random(4));
	if (direction == 0) {
		x -= 10;
	}
	else if (direction == 1) {
		x += 10;
	}
	else if (direction == 2) {
		y -= 10;
	}
	else {
		y += 10;
	}

	if (x > 256) {
		x = 0;
	}
	if (x < 0) {
		x = 256;
	}
	if (y > 256) {
		y = 0;
	}
	if (y < 0) {
		y = 256;
	}
}
