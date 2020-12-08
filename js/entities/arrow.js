class Arrow extends Rectangle{
    constructor(x, y, canvas, width, height, movementSpeed, color) {
        super(x, y, canvas, width, height, true, color);


    }

    update(){
        this.draw();
    }


    
}