noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500)
    video.position(100, 100)

    canvas = createCanvas(550, 500);
    canvas.position(680, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    document.getElementById("text_size").innerHTML = "Font Size of the Text is " + difference + " px";
    background('aqua');
    fill('teal');
    stroke('teal');
    textSize(difference);
    text('Alvira', noseX, noseY);
}

function modelLoaded(){
    console.log('PoseNet is Initialised!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + " nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist X = " + leftWristX + " right wrist X = " + rightWristX + " difference = " + difference);
    }
}