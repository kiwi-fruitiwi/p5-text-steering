let font;

function preload() {
  font = loadFont('fonts/Meiryo-01.ttf');
}

function setup() {
  createCanvas(600, 300);
  colorMode(HSB, 360, 100, 100, 100);

  textFont(font);
  textSize(128);
  fill(0, 0, 100);
  noStroke();
}

function draw() {
  background(0, 0, 30);
  ellipse(mouseX, mouseY, 50, 50);
  text('train', 100, 200);
}