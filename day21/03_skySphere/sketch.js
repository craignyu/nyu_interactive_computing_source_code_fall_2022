// variable to hold a reference to our A-Frame world
let world;

// which image are we currently using?
var currentImage = 0;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// create a new 'sky' entity - this functions as a huge sphere (500 meter radius) that
	// is wrapped using an 'equirectangular' image (simliar to a "mercator projection" for a map)
	// the image is loaded in the 'index.html' file
	let sky = new Sky({
		asset: 'sky1'
	});
	world.add(sky);
}

function draw() {

}
