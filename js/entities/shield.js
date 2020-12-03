class Shield extends Rectangle{
    constructor(x, y, canvas, width, height, rotation, canCollide, color, distanceFromCore) {
        super(x, y, canvas, width, height, rotation, canCollide, color);
        
        this.distanceFromCore = distanceFromCore;
        this.enabled = false;
    }
    
    toggle(on){
        
    }

    block(){
        this.enabled=false;
        
        //play a sound here.

        return 1;
    }
}