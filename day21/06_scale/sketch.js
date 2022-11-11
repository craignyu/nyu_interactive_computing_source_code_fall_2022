// variable to hold a reference to our A-Frame world
var world;

// some boxes that need to be global (so we can access them in 'draw')
var b1, b2, b3, b4;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set a background color for the world using RGB values
	world.setBackground(173, 216, 230);

	// scale allows you to "stretch" an entity along any of its axes
	b1 = new Box({
						x:-3, y:1, z:0,
						scaleX: 2,
						asset: 'gold'
	});
	world.add(b1);

	b2 = new Box({
						x:0, y:1, z:0,
						scaleY: 2,
						asset: 'iron'
	});
	world.add(b2);

	b3 = new Box({
						x:3, y:1, z:0,
						scaleZ: 2,
						asset: 'stone'
	});
	world.add(b3);


	// you can also progressively change these values over time (see draw)
	b4 = new Box({
						x:5, y:1, z:0,
						asset: 'stone'
	});
	world.add(b4);



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

// keep track of how much to change scale by
var scaleChange = 0.01;

function draw() {

	// get the current scale of the object (this is an object with three properties - x, y & z)
	var s = b4.getScale();

	// did we get too big or too small?
	if (s.x > 2 || s.x < 0.5) {
		scaleChange *= -1;
	}

	// update accordingly
	b4.setScale(s.x + scaleChange, s.y + scaleChange, s.z + scaleChange);

}
