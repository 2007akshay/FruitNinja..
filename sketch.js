var a1_image , a1 
var a2_image , a2
var f1_image , f1 
var f2_image , f2
var f3_image , f3
var f4_image , f4 
var gameState = 1
var PLAY= 1 
var END = 0
var s1_image , s1
var score = 0
var gameover_image , gameover
var playSound ,playGameOver

function preload(){
 a1_image=loadAnimation("alien1.png","alien2.png");
 //a2_image=loadImage("alien2.png");
 f1_image=loadImage("fruit1.png");
 f2_image=loadImage("fruit2.png");
 f3_image=loadImage("fruit3.png");
 f4_image=loadImage("fruit4.png");
 s1_image=loadImage("sword.png");
  gameover_image=loadImage("gameover.png")
  playSound=loadSound("knifeSwooshSound.mp3")
  playGameOver=loadSound("gameover.mp3")


}

function setup() {
  createCanvas(600, 600);
 s1=createSprite(300,300,10,10)
  
  
 s1.addImage(s1_image);
 s1.scale=0.5
  f1b=new Group ();
  f2b=new Group ();
  f3b=new Group ();
  f4b=new Group ();
  a1b=new Group ();
  //a2b=new Group ();
  
}

function draw() {
background("blue");
  
  drawSprites();
  if (score+10){
  f1b.velocityX=-4   
   f2b.velocityX=-4 
  f3b.velocityX=-4  
    f4b.velocityX=-4
    a1b.velocityX=-4
  }
  fill("red")
  textSize(20)
  text("Score : " + score ,470,20)
  
  //alien2();
  if(gameState === PLAY){
    s1.x=World.mouseX
  s1.y=World.mouseY
   if (frameCount%80===0){
      r=Math.round(random(1,4))
    if (r===1){
        fruit1();
        
        }
    if (r===2){
        fruit2();
        
        }
    if (r===3){
        fruit3();
        
        }
  
    
    if (r===4){
        fruit4();
    }
     if (s1.isTouching(f1b)){
  score=score+1;    
  f1b.destroyEach(); 
       playSound.play();
     
} 
  if (s1.isTouching(f2b)){
  score=score+1;    
  f2b.destroyEach();    
   playSound.play();  
}             
if (s1.isTouching(f3b)){
  score=score+1;    
  f3b.destroyEach();    
  playSound.play();   
}             
if (s1.isTouching(f4b)){
  score=score+1;    
  f4b.destroyEach(); 
  playSound.play();
}
  }             

    
     
  }
     if(frameCount%253===0){
  r=Math.round(random(1,2))
  if(r===1){
    alien1();
  }
  /*if(r===2){
   // alien2();
  }*/
       
  } 
   if (a1b.isTouching(s1)){
  gameState =END 
     //s1.destroyEach();
     
}  
  /*if (a2b.isTouching(s1)){
  gameState =END 
    //s1.destroyEach();
    
  }*/
    
  
  
  
 if (gameState === END)  {
   background("yellow")
   playGameOver.play();
   drawSprites();
  gameover=createSprite(300,300,10,10)
 gameover.addImage(gameover_image)
   a1b.destroyEach();
  // a2b.destroyEach();
    f1b.destroyEach();    
  f2b.destroyEach();
   f3b.destroyEach();
   f4b.destroyEach();
   s1.destroy();
   if (keyDown("space")){
     gameState=PLAY  
     s1.x=World.mouseX
  s1.x=World.mouseX
  s1.y=World.mouseY 
   }
}  
   
 
 
   
    
    //enemy();  
   // alien1();   
  
 
s1.debug=false              
    
  
      
}


function alien1(){
 a1=createSprite(577,Math.round(random(100,400)),10,10); 
 a1.addAnimation ("running",a1_image); 
 a1.velocityX=-1 
  a1b.add(a1)
}

/*function alien2(){
 a2=createSprite(577,150,10,10);
 a2.addImage(a2_image);
 a2.velocityX=-1  
  a2b.add(a2)
}*/ 

function fruit1(){
f1=createSprite(577,Math.round(random(100,400)),10,10);
 f1.addImage(f1_image)
 f1.scale=0.2  
  f1.velocityX=-2 
  f1b.add(f1)
}

function fruit2(){
f2=createSprite(577,Math.round(random(100,400)),10,10)
 f2.addImage(f2_image)
 f2.scale=0.2  
  f2.velocityX=-2 
  f2b.add(f2)
}

function fruit3(){
f3=createSprite(577,Math.round(random(100,400)),10,10);
 f3.addImage(f3_image)
 f3.scale=0.2  
 f3.velocityX=-2 
  f3b.add(f3)
}  

function fruit4(){
f4=createSprite(577,Math.round(random(100,400)),10,10);
 f4.addImage(f4_image);
 f4.scale=0.2  
 f4.velocityX=-2 
  f4b.add(f4)
}
