class Accessory{
  constructor(Name,Rarity){
    this.name = name
    this.rarity = rarity
    this.img = loadImage(name + ".png")
  }
}
class MagicalUnicornHorn extends Accessory{
  constructor(){
    super("Magical Unicorn Horn","Uncommon")
  }
}