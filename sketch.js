let font;

function preload() {
  font = loadFont('fonts/Meiryo-01.ttf');
}

function setup() {
  createCanvas(600, 300);
  colorMode(HSB, 360, 100, 100, 100);

  textFont(font);
  textSize(192);
  fill(0, 0, 20);
  noStroke();
  background(0, 0, 30);

  text('train', 100, 200);
  let points = font.textToPoints('train', 100, 200);

  for (let i=0; i<points.length; i++) {
    let pt = points[i];
    stroke(80, 100, 70, 100);
    strokeWeight(4);
    point(pt.x, pt.y);
  }
}

function draw() {
  // background(0, 0, 30);
  // ellipse(mouseX, mouseY, 50, 50);
}