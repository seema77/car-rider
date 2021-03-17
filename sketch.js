var canvas;
var form;
var wall1;
var bk,bkImg;
var plImg,pl;
function preload(){
  bkImg = loadImage("bk.jpg");
  plImg= loadImage("play.png");
}
function setup(){
  createCanvas(1200,570);
  wall1= createSprite(1,3,2500,5);
  wall1.shapeColor="yellow";
  wall2= createSprite(1,10,2500,5);
  wall2.shapeColor="yellow";
  wall3= createSprite(1,560,2500,5);
  wall3.shapeColor="yellow";
  wall4= createSprite(1,567,2500,5);
  wall4.shapeColor="yellow";
bk= createSprite(800,300);
bk.addImage(bkImg);

pl= createSprite(550,340);
pl.addImage(plImg);
pl.scale=1.3;
  form= new Form();

}
function draw(){
  background("purple");
  textSize(80);
  textFont("Cursive");
  strokeWeight(20);
 stroke("blue");
 fill("white");
 text("CAR RIDER", 320, 240);
 
  if(mousePressedOver(pl)){
    bk.display();
  }
 // form.display();
 
  pl.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  //drawSprites();
}
