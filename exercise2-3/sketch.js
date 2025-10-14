let ballX = 100
let ballY = 75
let ballSpeed
let ballXDir = 3
let ballYDir = 3
let ballSwitchTime


function setup() {
    createCanvas(600, 400)
}

function draw() {
    background(255)
    circle(ballX, ballY, 100)
    ballX += ballXDir
    ballY += ballYDir
    if (ballY >= height - 50)
        ballYDir *= -1
    if (ballX >= width - 50)
        ballXDir *= -1
    if (ballY <= 50)
        ballYDir *= -1
    if (ballX <= 50)
        ballXDir *= -1
}
