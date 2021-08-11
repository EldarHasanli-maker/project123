function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,380);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("#10a38d");
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}