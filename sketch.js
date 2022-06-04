function setup() {
  createCanvas(400, 400);
}

let x = 100;
let y = 100;
let r = 100;
let g = 100;
let b = 100;
function draw() {
  background(220);
  noStroke()
  fill(r,g,b)
  circle(x,y,20)
  r += random(-5,5);
  g += random(-5,5);
  b += random(-5,5);
  x += random(-5,5)
  x = (x + 400) % 400
  y += random(-5,5)
  y = (y + 400) % 400
  
}