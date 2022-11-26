// create a variable for A-Frame world
let world;

// references to our markers (which are defined in the HTML document)
let markerHiro;

// a static container that represents some graphics that we always want visible to our users
let staticContainer1;
let staticContainer2;
let staticContainer3;

// some 'glow' indicators to show that that a container has been selected
let glow1;
let glow2;
let glow3;

// logic for flipping the incoming video feed
let videoRepositioned = false;

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  markerHiro = world.getMarker("hiro");
  markerHiro.addChild(new Sphere({
    x:0, y:0.5, z:0,
    red: 255, green:0 , blue: 0,
    radius: 0.25
  }));


  // create a static container that will always be visible to the user even if not marker is being detected
  staticContainer1 = new Container3D({
    x:-2, y:0, z: -5
  });
  staticContainer2 = new Container3D({
    x:0, y:0, z: -5
  });
  staticContainer3 = new Container3D({
    x:2, y:0, z: -5
  });

  // add some geometry to the static containers
  staticContainer1.addChild(new Box({
    x:0, y:0, z:0,
    asset: 'stonebrick',
    red:255,green:0,blue:0,
    width: 0.5, height:0.5, depth:0.5
  }));
  staticContainer2.addChild(new Box({
    x:0, y:0, z:0,
    asset: 'stonebrick',
    red:0,green:255,blue:0,
    width: 0.5, height:0.5, depth:0.5
  }));
  staticContainer3.addChild(new Box({
    x:0, y:0, z:0,
    asset: 'stonebrick',
    red:0,green:0,blue:255,
    width: 0.5, height:0.5, depth:0.5
  }));

  // add in glow indicators to each container
  glow1 = new Box({
    red:255, green:255, blue: 0,
    opacity: 0.25,
    width:0.6, height: 0.6, depth: 0.6,
    visible: false
  });
  staticContainer1.addChild( glow1 );
  glow2 = new Box({
    red:255, green:255, blue: 0,
    opacity: 0.25,
    width:0.6, height: 0.6, depth: 0.6,
    visible: false
  });
  staticContainer2.addChild( glow2 );
  glow3 = new Box({
    red:255, green:255, blue: 0,
    opacity: 0.25,
    width:0.6, height: 0.6, depth: 0.6,
    visible: false
  });
  staticContainer3.addChild( glow3 );

  // add the static containers to the world
  world.scene.appendChild( staticContainer1.tag );
  world.scene.appendChild( staticContainer2.tag );
  world.scene.appendChild( staticContainer3.tag );
}


function draw() {

  // flip the order of the video, if necessary
  if (!videoRepositioned) {
    // get a DOM reference to the video and canvas
    let videoElement = document.querySelector('video');
    let canvasElement = document.querySelector('canvas');
    if (videoElement) {
      videoElement.style['transform'] = 'scale(-1,1)';
      videoElement.style['filter'] = 'flipH';

      canvasElement.style['transform'] = 'scale(-1,1)';
      canvasElement.style['filter'] = 'flipH';

      videoRepositioned = true;
    }
  }

  // hide all glow indicators
  glow1.hide();
  glow2.hide();
  glow3.hide();

  if (markerHiro.isVisible()) {

    // which static container are we closest to?
    let markerPosition = new THREE.Vector3().setFromMatrixPosition( markerHiro.tag.object3D.matrixWorld );
    let s1Position = new THREE.Vector3().setFromMatrixPosition( staticContainer1.tag.object3D.matrixWorld );
    let s2Position = new THREE.Vector3().setFromMatrixPosition( staticContainer2.tag.object3D.matrixWorld );
    let s3Position = new THREE.Vector3().setFromMatrixPosition( staticContainer3.tag.object3D.matrixWorld );

    // get the rotation of the marker
    let r = markerHiro.tag.object3D.rotation;
    let normalizedYRotation = degrees(r.y) + Math.ceil(-1 * degrees(r.y) / 360) * 360;
    console.log(r.y, normalizedYRotation);

    if (dist(markerPosition.x, markerPosition.y, s1Position.x, s1Position.y) < 1) {
      glow1.show();
      if (normalizedYRotation > 180 && normalizedYRotation < 315) {
        staticContainer1.spinY(-1);
      }
      else if (normalizedYRotation > 45 && normalizedYRotation < 180) {
        staticContainer1.spinY(1);
      }
    }
    else if (dist(markerPosition.x, markerPosition.y, s2Position.x, s2Position.y) < 1) {
      glow2.show();
      if (normalizedYRotation > 180 && normalizedYRotation < 315) {
        staticContainer2.spinY(-1);
      }
      else if (normalizedYRotation > 45 && normalizedYRotation < 180) {
        staticContainer2.spinY(1);
      }
    }
    else if (dist(markerPosition.x, markerPosition.y, s3Position.x, s3Position.y) < 1) {
      glow3.show();
      if (normalizedYRotation > 180 && normalizedYRotation < 315) {
        staticContainer3.spinY(-1);
      }
      else if (normalizedYRotation > 45 && normalizedYRotation < 180) {
        staticContainer3.spinY(1);
      }
    }
  }
}
