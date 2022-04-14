var paddle2=10,paddle1=10;
var paddle1X=10,paddleHight=110;
var paddle2Y=685,paddle2hight=70;

var score1=0,socre2=0;
var paddle1Y;

var playerscore=0;
var pcscore=0;

var ball={
	x : 650/2,
	y : 480/2,
	r : 20,
	dx : 3,
	dy : 3
}
rightwristY=0;
rightwristX=0;
socreRightwrist=0
game_status="";

function preload() {
	ball_touch_paddle=loadSound("ball_touch_paddle.wav");
	 missed=loadSound("missed.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(700,600);
	canvas.parent('canvas');


	video=createCapture(VIDEO);
	video.size(800,400);
	video.hide();

	poseNet=ml5.poseNet(video,modalLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	background(0);
	image(video,0,0,700,600);
	
	fill("black");
	stroke("black");
	rect(680,0,20,700);

	fill("black");
	stroke("black");
	rect(0,0,20,700);
	
	if (rightwrist_score) {
		
	}
}

function modalLoaded() {
	console.log("modalLoaded");
}

function gotPoses() {
	if (results.length>0) {
		rightwristY=results[0].pose.rightwrist.y;
		rightwristX=results[0].pose.rightwrist.x;
		socreRightwrist=result[0].pose.keypoints[10].score;
		console.log(socreRightwrist);
	}
}


