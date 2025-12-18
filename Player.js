var stats
var Avg
var movement
var inventory
var tester
class Player{
  constructor(){
    this.x=0
    this.y=0
    this.d=loadImage("TesterMan.png")
    this.direc='R'
    this.hitRange=0;
    stats = new Stats(100,100,0.5,20,20,30,50,50,0.5)
    this.stats=stats
    inventory = [new inventorySlot("Accessory"),new inventorySlot("Accessory")]
    tester = loadImage("iridescentPearl.png")
    
    inventory[1].addItem(new Item("Accessory","Iridescent Pearl",tester))
    
    movement = new aheadApproach()
  }
  display(){
    image(this.d,width/2 -50,height/2 -50,100,100)

    
    if(keyIsDown(70)){
      for(var i=0;i<inventory.length;i++){
        inventory[i].display(0,i*75)
      }
    }
  }
  attack(){
    if(keyIsDown(32)){
      if(this.hitRadius==0){
        console.log("YAAAAAA")
        this.hitRadius=30
      }
    }
  }
  withdraw(){
    if(this.hitRadius>26){
      this.hitRadius--
    }else{
      if(this.hitRadius!=0){
        this.hitRadius=0
      console.log("gone!")
      }
    }
  }
  takeHit(enemyAttack){
    stats.HP-=enemyAttack/this.stats.DEF
    console.log("owie")
  }
  move(){
    this.stats=stats
    this.stats = inventory[1].accessoryEffects(this.stats)
    movement.setAvgs();
      if(keyIsDown(RIGHT_ARROW)){
        this.direc='R'
        movement.setAvgs(this.direc)
        console.log(movement.Avg)
        if(movement.Avg>100&&movement.Avg<130){
          this.x+=stats.SPD
        }else{
          this.x+=stats.SPD
          this.x-=stats.SPD
        }
      }
      if(keyIsDown(LEFT_ARROW)){
        this.direc='L'
        movement.setAvgs(this.direc)
        if(movement.Avg>100&&movement.Avg<130){
          this.x-=stats.SPD
        }else{
          this.x-=stats.SPD
          this.x+=stats.SPD
        }
      }
      if(keyIsDown(UP_ARROW)){
        this.direc='U'
        movement.setAvgs(this.direc)
        if(movement.Avg>100&&movement.Avg<130){
          this.y-=stats.SPD
        }else{
          this.y-=stats.SPD
          this.y+=stats.SPD
        }
      }
      if(keyIsDown(DOWN_ARROW)){
        this.direc='D'
        movement.setAvgs(this.direc)
        if(movement.Avg>100&&movement.Avg<130){
          this.y+=stats.SPD
        }else{
          this.y+=stats.SPD
          this.y-=stats.SPD
        }
      }
  }
  }
