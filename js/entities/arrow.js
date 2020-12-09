class Arrow extends Rectangle{
    constructor(x, y, canvas, width, movementSpeed ,color, directionX, directionY) {
        super(x, y, canvas, width, width, true, color);
        
        this.movementSpeed = movementSpeed;
        this.direction = {x: directionX, y: directionY};
    }

    update(){
        this.x += this.movementSpeed * this.direction.x;
        this.y += this.movementSpeed * this.direction.y;
        console.log(this.x,this.y);
        this.draw();
    }

}