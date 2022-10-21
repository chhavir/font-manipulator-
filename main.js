leftWristX = 0;
rightWristY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500);
    canvas.position(530,200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log(" Posenet is intialized");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}

function draw()
{
    background("grey");
    document.getElementById("size").innerHTML = "The size of the font is  =  " +difference;
    text("Chhavi", 50,200);
    textSize(difference);
}

