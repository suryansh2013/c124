function preload() {}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}
function modelLoaded() {
    console.log("Model is Initialized");
}
function getPoses(results) {
    if(results.length>0 ) {
        console.log(results);
        console.log("Nose X =" + results[0].pose.nose.x);
        console.log("Nose X =" + results[0].pose.nose.x);
    }
}
function draw() {
   image(video, 0, 0, 400, 400);
}
function take_snapshot() {
    save("Moustache.png");
}