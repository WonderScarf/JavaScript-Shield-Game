const shieldColor="#FB869C";

class Robot extends Rectangle{
    constructor(x, y, canvas, width, height, canCollide, movementSpeed, hp, color) {
        
        super(x, y, canvas, width, height, canCollide, color);

        this.movementSpeed = movementSpeed;
        this.direction = {x:0, y:0}
        this.hp = hp;

        this.shield = new Shield(this.x,this.y, this.canvas, this.width, this.height, true, shieldColor, 60);
    }

    update(){
        this.x += this.movementSpeed * this.direction.x;
        this.y += this.movementSpeed * this.direction.y;

        //this.shield.update(this.x, this.y);

        this.shield.update(this.x, this.y);

        //console.log(this.shield.x, this.shield.y);
        this.draw();
    }

    place(xNew, yNew){
        this.x=xNew;
        this.y+=yNew;
        this.draw();
    }
    
    canvasCollideFix(){
        if(this.canCollide){
            if((this.x + this.width + (this.movementSpeed * this.direction.x)) > this.canvas.width){ 
                this.x = this.canvas.width - this.width;
            }
            
            if(this.x - (this.movementSpeed * this.direction.x) < 0){ 
                this.x = 1;
            }
    
            if(this.y - (this.movementSpeed * this.direction.y) < 0){
                this.y = 1;
            }
            
            if((this.y + this.height + (this.movementSpeed * this.direction.y)) > this.canvas.height){ 
                this.y = this.canvas.height - this.height;
            }
        }
    }

    arrowCollideFix(arrows){
        
        arrows.forEach( (arrow, index ) => {
            if( this.isTouch(arrow)){
                this.hp--;
                console.log(this.hp);
                arrows.splice(index, 1);
            }
            //console.log(this.hp);
        });
    }

    
    
}