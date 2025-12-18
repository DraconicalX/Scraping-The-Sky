var icon
class inventorySlot{
  constructor(Type){
    this.itemType = Type
    this.item = "file.unknown"
    this.itemIcon = "empty"
    switch (this.itemType){
        case "Accessory":
          icon = loadImage("accSlot.png")
        break;
        case "Item":
          icon = loadImage("emptySlot.png")
        break;
    }
  }
  display(x,y){
    image(icon,x,y,75,75)
    if(this.itemIcon!="empty"){
      image(this.itemIcon,x+5,y+5,65,65)
    }
  }
  addItem(Item){
    if(Item.type == this.itemType){
      this.item = Item.name
      this.itemIcon = Item.icon
    }
  }
  getItemIn(){
    return(this.item)
  }
  accessoryEffects(playerStats){
    switch (this.item){
      case "Iridescent Pearl":
          playerStats.HPC=min((playerStats.HPC*2.25),350)
          playerStats.HPR=min((playerStats.HPR*2.25),350)
          playerStats.DEF=min((playerStats.DEF*2.25),350)
          playerStats.SPD=min((playerStats.SPD*2.25),75)
          playerStats.DMG=min((playerStats.DMG*2.25),350)
          playerStats.MNC=min((playerStats.MNC*2.25),350)
          playerStats.MNR=min((playerStats.MNR*2.25),350)
          break;
    }
    return playerStats
  }
}
