var BeginningScreen
var Texts
var AnimTimer
var Music
var Floor
var FloorImg
var PlayerX
var PlayerY
var player
var Avg
var enemy
var X
var Y
var Healthbar
var Health
var Credits
function preload(){
  BeginningScreen = loadImage("Skyscraper.png")
  Texts = []
  Texts[0] = loadImage("Scraping.png")
  Texts[1] = loadImage("The.png")
  Texts[2] = loadImage("Sky.png")
  Music = loadSound("Lobby Crest.mp3")
  FloorImg = loadImage("Map.png")
  AnimTimer = 0;
  Floor = 0;
  PlayerX = 0
  PlayerY = 0;
  player = new Player();
  enemy = [new Enemy(),new Enemy()];
  enemy[1].x=0
  enemy[1].y=0
  enemy[1].stats.SPD=20
  console.log(enemy[1].stats.SPD)
  console.log(enemy[0].stats.SPD)
  Health = loadImage("Health.png")
  Healthbar = loadImage("Healthbar.png")
  Credits = loadImage("creditButton.png")
}
function setup() {
  createCanvas(1470, 900);
  Music.loop()
}

function draw() {
  background(220);
  if(Floor==0){
    AnimTimer++
    image(BeginningScreen,0,0,width,height)
    if(AnimTimer>50){
      image(Texts[0],width/3.51,height/15.5,650,325)
    }
    if(AnimTimer>100){
      image(Texts[1],width/2.36,height/2.87,300,150)
    }
    if(AnimTimer>150){
      image(Texts[2],width/2.7,height/1.55,400,200)
      image(Credits,width-500,height-325,500,500)
    }
  }else{
    image(FloorImg,-player.x,-player.y,width*4,width*2)
    // console.log(FloorImg.get((width/2 -50+player.x)*1092/(width*4),(width/2 +50+player.y)*546/(width*2))[0])
      // console.log(get((width/2 -50),(width/2 +50))[0])
      // console.log(get((width/2 -50),(width/2 +50))[1])
    
    player.display()
    player.move();   
    player.attack();
    for(i=0; i<enemy.length; i++){
      enemy[i].takeHit(player.x,player.y,player.hitRadius)
      player.withdraw();
      enemy[i].display(player.x,player.y)
      enemy[i].move(player.x,player.y)
      if(enemy[i].hit){
        player.takeHit(enemy[i].stats.DMG)
      }
      if(player.stats.HP<=0){
        console.log("Game has ended!")
        exit(0)
      }
      enemy[i].hit=false
    }
    image(Health,width/2-200,0,400*stats.HP/stats.HPC,22.8571428571*2)
    image(Healthbar,width/2-200,0,400,22.8571428571*2)
  }
  
  if(keyIsDown(ENTER)){
    if(Floor==0){
      Floor=1
    }
  }
}
