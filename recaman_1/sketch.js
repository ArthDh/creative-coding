let numbers = [];
let count = 1;
let sequence = [];
let index = 0;

let scl = 0;

let arcs = [];

let biggest = 0;


class circle {
  constructor(pos,r,sig) {
    this.pos = pos;
    this.r = r;
    this.sig = sig;
  }

  show() {
    strokeWeight(0.5);
    noFill();

    var from = color(255, 100, 0, 0.7* 255);
    var to = color(0,0, 255, 0.7 * 255);
    var c1 = lerpColor(from, to, .20);
    var c2 = lerpColor(from, to, .80);

    if (this.sig == 0) {
      stroke(c1);
      rect(this.pos.x, this.pos.y, this.r,this.r);
    } else {
      stroke(c2);
      rect(this.pos.x, this.pos.y, this.r, -this.r);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  background(0);
  numbers[index] = true;
  sequence.push(index);
}

function step() {
  let next = index - count;
  if (next < 0 || numbers[next]) {
    next = index + count;
  }
  numbers[next] = true;
  sequence.push(next);

  let a = new circle(createVector(index,0), next, count%2);
  arcs.push(a);

  index = next;

  if (index > biggest) {
    biggest = index;
  }
  count++;
}

function draw() {
  step();
  translate(0, height / 2);
  scl = lerp(scl, width / biggest, 0.1);
  scale(scl);
  background(0);

  for (let a of arcs) {
    a.show();
  }

}
