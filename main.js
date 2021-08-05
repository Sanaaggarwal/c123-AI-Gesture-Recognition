function preload(){
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.position(80,100);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded(){
    console.log("posenet is loaded");
}
function draw(){
    background("lightgreen");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}