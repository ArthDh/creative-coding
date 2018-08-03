var theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  theta = map(mouseY,0,height,0,PI/2);
  // TODO :
  // Use recursive function for number of trees
  push();
  translate(width/2, height);
  stroke(map(mouseX, 0, width, 0,125),0,255);
  branch(map(mouseX, 0,windowWidth, 0,150));
  pop();

  push();
  translate(width/4, height);
  stroke(0,255,map(mouseX, 0, width, 0,125));
  branch(map(mouseX, 0, width, 0,50));
  pop();

  push();
  translate(width/2+width/4, height);
  stroke(255,map(mouseX, 0, width, 0,125),0);
  branch(map(mouseX, 0, width, 0,50));
  pop();
}

function branch(len) {
  strokeWeight(2/len+0.5);

  line(0, 0, 0, -len);
  // Move to the end of that line
  translate(0, -len+random(-0.5,0.5));

  len *= 0.60;
  if (len > 1) {
    // Right
    push();
    rotate(theta);
    branch(len);
    pop();
    // Left
    push();
    rotate(-theta);
    branch(len);
    pop();
  }
}
