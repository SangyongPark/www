var r,g,b;
function setup() {
createCanvas(600,600);
r=random(255);
g=random(255);
b=random(255);
  
}

function draw() {
 background(0);
 fill(255);//white
 quad(0,0,130,0,130,144,0,144);
 quad(0,165,130,165,130,390,0,390);
 quad(149,411,495,411,495,600,149,600);
 quad(517,411,600,411,600,484,517,484);
 fill(0,0,255);//blue
 quad(0,411,130,411,130,600,0,600);
 fill(255,0,0)//red
 quad(149,0,600,0,600,390,149,390);
 fill(255,255,0);//yellow
 quad(517,504,600,504,600,600,517,600);
 
 
 /*fill(105,105,105)//grey
 quad(130,0,133,0,133,146,130,146);*/
 if(mouseX < 130 && mouseY<144){
   fill(r,g,b);
   quad(0,0,130,0,130,144,0,144);
 }

 if(mouseX < 130 && mouseY<390&&mouseY>165){
   /*r=random(255);
   g=random(255);
   b=random(255);*/
   fill(r,g,b);
   quad(0,165,130,165,130,390,0,390);
 }
 if(mouseX <130 && mouseY>411&mouseY<600){
   fill(r,g,b);
   quad(0,411,130,411,130,600,0,600);
 }
 if(mouseX>149 && mouseY<390){
   fill(r,g,b);
   quad(149,0,600,0,600,390,149,390);
 }
 if(mouseX>149 && mouseX<495 && mouseY>411){
   fill(r,g,b);
   quad(149,411,495,411,495,600,149,600);
 }
 if(mouseX>517 && mouseY>411 && mouseY<484){
   fill(r,g,b);
   quad(517,411,600,411,600,484,517,484);
 }
 if(mouseX>517 && mouseY>504){
   fill(r,g,b);
   quad(517,504,600,504,600,600,517,600);
 }
 if((mouseX>=130 && mouseX<=149)||
 (mouseY>=144 &&mouseY<=165 && mouseX<=149)||
 (mouseY>=390 &&mouseY<=411 && mouseX<=600)||
 (mouseX>=495 &&mouseX<=517)||
 (mouseY>=484 &&mouseY<=504 && mouseX>=517)
 ){
   r=random(255);
   g=random(255);
   b=random(255);
 }
}
