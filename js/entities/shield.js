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

    update(robot){

        this.x = robot.x + (this.distance * this.direction.x);
        this.y = robot.y + (this.distance * this.direction.y);
        this.canvasCollideFix()

        if (this.enabled){
            this.draw();
        }
    }

    canvasCollideFix(){
        if(this.canCollide){
            if(this.x + this.width > this.canvas.width){ 
                this.enabled = false;
            }
            else if(this.x < 0){ 
                this.enabled = false;
            }
            else if(this.y < 0){
                this.enabled = false;
            }
            else if((this.y + this.height) > this.canvas.height){ 
                this.enabled = false;
            }
        }
    }

    
}