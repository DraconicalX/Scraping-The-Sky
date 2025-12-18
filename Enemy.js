var enemyStats
class Enemy{
  constructor(icon){
    this.x =600
    this.y =400
    this.d =loadImage("TesterMan.png")
    this.hit=false
    enemyStats = new Stats(100,100,0.5,30,10,30,50,50,0.5)
    this.stats=enemyStats
  }
  display(playerX,playerY){
    image(this.d,this.x-playerX,this.y-playerY,70,70)
  }
  move(playerX,playerY){
    if(playerX+width/2 -50-this.x!=0){
      this.x+=((playerX+width/2 -50-this.x)/abs(playerX+width/2 -50-this.x))*this.stats.SPD
    }
    if(playerY+height/2 -50-this.y!=0){
      this.y+=((playerY+height/2 -50-this.y)/abs(playerY+height/2 -50-this.y))*this.stats.SPD
    }
  }
  takeHit(playerX,playerY,hitRange){
    console.log(hitRange)
    if(dist(playerX,playerY,this.x-width/2 +50,this.y-height/2 +50)<hitRange){
      this.x-=round(random(-1,1))*round(width/5)
      this.y-=round(random(-1,1))*round(height/5)
      console.log("OOF")
      
    }else if(dist(playerX,playerY,this.x-width/2 +50,this.y-height/2 +50)<=50){
      this.hit=true
      console.log("Eheheh attacked")
    }
  }
}
class greenSlime{
  
}
