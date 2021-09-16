/*
@author Kiwi
@date 2021-09-12
version comments
  program shell: basic setup, draw. css styling
  load a font, use text
  font.textToPoints » display all points
  vehicle with: pos, vel, acc, r, maxspeed, maxforce, target
  vehicle.show, .update,
  vehicle.applyforce
  vehicle.seek, flee » behaviors
  vehicle.arrive
  textpoints afraid of mouse
  play with optional parameters to textToPoints
 */


let font
let vehicles = []
let points = []

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf');
}

function setup() {
    createCanvas(600, 300)
    colorMode(HSB, 360, 100, 100, 100)
    background(0, 0, 30)

    points = font.textToPoints('trainbow', 24, 200, 128, {
        sampleFactor: 0.5, // increase for more points
        simplifyThreshold: 0.0 // increase to remove collinear points
    })
    // text('train', 100, 200)

    for (let i = 0; i < points.length; i++) {
        let pt = points[i]
        let vehicle = new Vehicle(pt.x, pt.y)
        vehicles.push(vehicle)
    }

    stroke(0, 50, 100, 100)
    strokeWeight(8)
}

function draw() {
    background(0, 0, 30)

    for (let i = 0; i < vehicles.length; i++) {
        let v = vehicles[i]
        v.behaviors()
        v.update()
        v.show()
    }
}

