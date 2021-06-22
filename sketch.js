
var Runner;
var bomb;
var coin;
var energyDrink;
var path;
var power;

var RunnerImg,bombImg,coinImg,energyImg,pathImg,powerImg;



function preload(){
  //pre-load images
pathImg = loadImg("path.png");
RunnerImg = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-1.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(400,400);
path.addImage("path.png");
Runner = createSprite(60,80);
Runner.addImage("Runner.png");

}

function draw() {
  background(0);

}
