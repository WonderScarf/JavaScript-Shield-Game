const shieldXColor = "#5BD0FB";
const shieldYColor = "#F5ABB9";

class Robot extends Rectangle{
    constructor(x, y, canvas, width, height, rotation, canCollide, movementSpeed, color) {
        
        super(x, y, canvas, width, height, rotation, canCollide, color);

        this.movementSpeed = movementSpeed;
        this.currentDirection = {x:0, y:0}

        this.shields = new Array(4);
    }

    update(){
        this.x += this.movementSpeed * this.currentDirection.x;
        this.y += this.movementSpeed * this.currentDirection.y;
        
        this.draw();

        this.shields.forEach(shield => {
            shield.x += this.movementSpeed * this.currentDirection.x;
            shield.y += this.movementSpeed * this.currentDirection.y;
            shield.draw();
        });
        
        //this.drawShields();
        
        
    }

    initializeShields(){
        for (let i = 0;  i < this.shields.length;  i++){
            if(i % 2 == 0){
                this.shields[i] = new Shield(this.x + 10, this.y, this.canvas, this.width, 20, 0, true, shieldXColor, 10);
            }
            else{
                this.shields[i] = new Shield(this.x + 10, this.y + 10, this.canvas, this.width, 20, 0, true, shieldYColor, 10);
            }
        }
    }

    place(xNew, yNew){
        this.x=xNew;
        this.y+=yNew;

        this.draw();
    }
    
    canvasCollideFix(){
        if(this.canCollide){
            if((this.x + this.width + (this.movementSpeed * this.currentDirection.x)) > this.canvas.width){ 
                this.x = this.canvas.width - this.width;
            }
            else if(this.x - (this.movementSpeed * this.currentDirection.x) < 0){ 
                this.x = 1;
            }
    
            if(this.y - (this.movementSpeed * this.currentDirection.y) < 0){ 
                this.y = 1;
            }
            if((this.y + this.height + (this.movementSpeed * this.currentDirection.y)) > this.canvas.height){ 
                this.y = this.canvas.height - this.height;
            }
        }
    }
    
    

    
    
}