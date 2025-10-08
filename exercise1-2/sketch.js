let x = 0;

function setup() {
    createCanvas(600, 600);
    let moveAmount = random(1,10)
}


function draw() {
    background(0);
    circle(x, height / 2, 100);
    if (x < 0 || x > width) {
        moveAmount *= random(-1,-10)
    }
    moveAmount += random(1,10)
}