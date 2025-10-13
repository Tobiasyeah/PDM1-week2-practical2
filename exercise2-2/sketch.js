const maxX=800
const maxY=400
const squareSize=50


function setup() {
    createCanvas(maxX,maxY)
}

function draw() {
    let squareX=mouseX
    let squareY=mouseY
    background(0,150,255)
    if (mouseX>maxX-squareSize/2) 
        squareX=maxX-squareSize/2
    if (mouseX<squareSize/2) 
        squareX=squareSize/2
    rectMode(CENTER)
    square(squareX,squareY,squareSize)

}