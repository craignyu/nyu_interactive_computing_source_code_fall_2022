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

	// now that we have a world we can add elements to it using a series of wrapper classes

	// create a new box that uses one of our textures as its material
	var b1 = new Box({
						x: -3, y: 1, z:0,
						asset: 'iron'
					});
	world.add(b1);

	// we can also use color along with a bitmap to 'tint' the shape
	var b2 = new Box({
						x: 0, y: 1, z:0,
						asset: 'iron',
						red: 0, green: 255, blue: 0
					});
	world.add(b2);

	// we can also repeat a texture multiple times along the faces of a primitive
	var b3 = new Box({
						x: 3, y: 1, z:0,
						asset: 'gold',
						repeatX: 5,
						repeatY: 5
					});
	world.add(b3);


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

}
