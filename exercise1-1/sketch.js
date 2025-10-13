function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(255, 0, 150);
    background(0);
}

function draw() {
    if (mouseIsPressed) {
        circle(random(400), random(400), random(10,100));
    }
    if (keyIsPressed) {
        background(0)
    }
}