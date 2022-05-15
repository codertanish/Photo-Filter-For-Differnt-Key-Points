noseX = 0;
noseY = 0;
right_eye = 0;
glasses = "";
mustache = "";
bunny_ear = "";
bunny_nose = "";
function preload() {
glasses = loadImage("https://i.postimg.cc/C1cWCLms/Sunglasses-Image.png");
mustache = loadImage("https://i.postimg.cc/pX3yYPSv/Mustache-Image.png");
bunny_ear = loadImage("https://i.postimg.cc/mkYRYG1L/Bunny-Ears.png");
bunny_nose = loadImage("https://i.postimg.cc/NMTwtw46/Bunny-Nose-Image.png");
}

function setup() {
canvas = createCanvas(400, 400);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw() {
  image(video, 0, 0, 400, 400);
  image(bunny_ear, noseX - 275, noseY - 325, 250, 250);
  image(glasses, noseX - 250, noseY - 125, 200, 100);
  image(bunny_nose, noseX - 195, noseY - 75, 100, 100);
  image(mustache, noseX - 180, noseY - 40, 60, 35);

}

function modelLoaded() {
    console.log('poseNet Initialized');
}

function take_snapshot() {
    save('FilteredPhoto.png');
}

function gotPoses(results) {
 if(results.length > 0) {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("Nose x = " + noseX);
     console.log("Nose y = " + noseY);

 } 
}
