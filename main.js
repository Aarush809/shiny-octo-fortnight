function setup(){
    canvas=createCanvas(640,480);
canvas.position(150,150);
video= createCapture(VIDEO)
video.size(640,480)
video.hide()
}

function draw(){
    image(video, 150, 150, 640, 480)
    fill(255, 0, 0)
    stroke(255,0,0)
    circle(150,150,50)
    circle(150,480,50)
    circle(625,150,50)
    circle(625,480,50)

    fill('#07f01b')
    stroke('#07f01b')
    rect(170,150,440,20)
    rect(170,480,440,20)
    rect(150,170,20,300)
    rect(620,170,20,300)
}