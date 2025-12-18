
class aheadApproach{
  constructor(){
    this.Avg=0
  }
  setAvgs(direc){
        switch(direc){
            case'R':
            this.Avg = (((get(width/2 +50+stats.SPD,height/2 -50)[0])+(get(width/2 +50+stats.SPD,height/2 -50)[1])+(get(width/2 +50+stats.SPD,height/2 -50)[2]))/3)
            break;
            case'L':
            this.Avg = (((get(width/2 -50-stats.SPD,height/2 -50)[0])+(get(width/2 -50-stats.SPD,height/2 -50)[1])+(get(width/2 -50-stats.SPD,height/2 -50)[2]))/3)
            
            break;
            case'U':
            this.Avg = (((get(width/2 -50,height/2 -50-stats.SPD)[0])+(get(width/2 -50,height/2 -50-stats.SPD)[1])+(get(width/2 -50,height/2 -50-stats.SPD)[2]))/3)
            break;
            case'D':
            this.Avg = (((get(width/2 -50,height/2 +50+stats.SPD)[0])+(get(width/2 -50,height/2 +50+stats.SPD)[1])+(get(width/2 -50,height/2 +50+stats.SPD)[2]))/3)
            break;
      }
    }
}