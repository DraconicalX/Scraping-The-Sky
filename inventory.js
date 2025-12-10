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
}