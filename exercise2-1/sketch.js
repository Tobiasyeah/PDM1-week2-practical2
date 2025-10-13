
let backgroundC = (0)
let circleC = (255, 0, 150)
let switched = 0

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(backgroundC)
    fill(circleC)
    circle(200, 200, 300)
}


function mouseIsPressed() {
    if (switched === 0) {
        backgroundC = (255, 0, 150)
        circleC = (0)
        switched = 1
    }
    else {
        backgroundC = (0)
        circleC = (255, 0, 150)
        switched = 0
    }
}

function draw() {
    background(backgroundC)
    fill(circleC)
    circle(200, 200, 300)
}
