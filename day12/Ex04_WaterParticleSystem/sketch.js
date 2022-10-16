// array to hold all particles
let pSystem = []

function setup() {
  createCanvas(500,500)
}

function draw() {
  background(255)

  // if the mouse is pressed create a particle
  if (mouseIsPressed) {

    let temp = new Drop(mouseX, mouseY)
    // put into array
    pSystem.push( temp )
  }


  // visit all particles and display them
  for (let i = 0; i < pSystem.length; i++) {
    let result = pSystem[i].moveAndDisplay()
    if (result == "gone") {
      // this particle is no longer useful!
      pSystem.splice(i, 1)
      i -= 1
    }
  }

  fill(0)
  text( pSystem.length, 20, 20)
}

class Drop {
  constructor(x,y) {
    this.x = x
    this.y = y
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(2,3);
    this.alpha = 255
    this.radius = random(10,30)
  }
  moveAndDisplay() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.x += this.xSpeed
    this.y += this.ySpeed
    ellipse(this.x, this.y, this.radius, this.radius)
    this.alpha -= 3

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
}
