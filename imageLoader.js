class imageLibrary{
  constuctor(){
    this.sprites = new spriteLibrary()
  }
}
class spriteLibrary{
    constructor(){
      this.items = new itemLibrary()
      this.characters=[]
    }
}
class itemLibrary{
  constructor(){
    this.IRIDESCENT_PEARL = loadImage("iridescentPearl.png")
    this.IRIDIUM_FISH = loadImage("iridiumfish.png")
  }
}
