class Shield extends Rectangle{
    constructor(x, y, canvas, width, height, canCollide, color , distance, hp) {
                
        super(x, y, canvas, width, height, canCollide, color);
        this.direction = {x: 0, y: 0};
        this.enabled = false;
        this.distance = distance;
        this.hp = hp;

    }

    toggle(on){
        if(this.enabled && on || !this.enabled && !on){
            this.enabled = false;
        }
        else{
            this.enabled = true;
        }
    }

    update(holderX, holderY){

        this.x = holderX + (this.distance * this.direction.x);
        this.y = holderY + (this.distance * this.direction.y);
        
        if (this.enabled){
            this.draw();
        }
    }

    blockAttack(){
        this.enabled=false;
            
        //play a sound here.

        return 1;
    }
}