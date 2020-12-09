class Arrow extends Rectangle{
    constructor(x, y, canvas, width, movementSpeed ,color, directionX, directionY) {
        super(x, y, canvas, width, width, true, color);
        
        this.movementSpeed = movementSpeed;
        this.direction = {x: directionX, y: directionY};
    }

    update(){
        this.x += this.movementSpeed * this.direction.x;
        this.y += this.movementSpeed * this.direction.y;
        this.draw();
    }

    checkCanvasPass(){
        //OOB means is a term meaning out of bounds in case it looks od
        let inBounds; 

        if((this.x + this.width + (this.movementSpeed * this.direction.x)) > this.canvas.width){ 
            inBounds = false;
        }
        else if(this.x - (this.movementSpeed * this.direction.x) < 0){ 
            inBounds = false;
        }
        else if(this.y - (this.movementSpeed * this.direction.y) < 0){
            inBounds = false;
        }
        else if((this.y + this.height + (this.movementSpeed * this.direction.y)) > this.canvas.height){ 
            inBounds = false;
        }
        else{
            inBounds = true;
        }

        return inBounds;
    }

}