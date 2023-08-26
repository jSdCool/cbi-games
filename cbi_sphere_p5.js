function preload() {
  document.body.lastChild.style.color="white";
  document.body.lastChild.style.fontSize="XXX-large";
  document.body.lastChild.style.textAlign="center";
  document.body.lastChild.style.top="50%";
  document.body.lastChild.style.left="40%";

  CBi_Image=loadImage("https://cdn.glitch.global/88bce890-01bf-4957-88e2-edc755292a20/CBi.png?v=1693017145965");
  font=loadFont("https://cdn.glitch.global/88bce890-01bf-4957-88e2-edc755292a20/micross.ttf?v=1693017155185");
}

var CBi_Image;
var font;
var stars;

function setup() {
  document.body.insertBefore(document.body.lastChild,document.body.firstChild);//make the canvas the first thing in the doc
  createCanvas(windowWidth, windowHeight, WEBGL);
  print(windowWidth+" "+windowHeight);
  initializeSphere(100, 100);
  textFont(font);
  print(width+" "+height);
  stars = new Array(100);
  for (let i=0; i<stars.length; i++) {
    stars[i]= new star(random(-width/2,width/2),random(-height/2,height/2));
  }
}

var rotation =100;
function draw() {  
  background(0);
  for (let i=0; i<stars.length; i++) {
    stars[i].draw();
  }
  ambientLight(120,120,120);
  directionalLight(255,255,255,-0.5,-0.5,1);
  directionalLight(120,120,120,-0.5,-0.5,1);
  rotateY(radians(rotation));

  textureSphere(200, 200, 200, CBi_Image);
  rotateY(radians(-rotation));
  rotation++;
  fill(0, 255, 0);
  textAlign(CENTER, CENTER);
  textSize(100);
  noLights();
  text("GAMES", 0, 250);
}

function windowResized() {
  resizeCanvas(windowWidth-4, windowHeight-4);  
  for (let i=0; i<stars.length; i++) {
    stars[i]= new star(random(-width/2,width/2),random(-height/2,height/2));
  }
  print(windowWidth+" "+windowHeight);
}

class star{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  draw(){
    fill(255);
    circle(this.x,this.y,1);
    //print(this.x+" "+this.y+" "+1);
  }
}
