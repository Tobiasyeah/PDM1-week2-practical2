let x = 0;
let forward =1
let moveAmount
let frame=0

function setup() {
    createCanvas(600, 600);
    moveAmount = random(1,10)
}


function draw() {
    console.log(`FRAME: ${frame} x: ${x}`)
    x += moveAmount*forward
    background(0);
    circle(x, height / 2, 100);
    if (x > width) {
        moveAmount = random(1,10)
        forward=-1
    }
    if (x<0) {
        forward=1
    moveAmount = random(1,10)
    }
    frame++
}   