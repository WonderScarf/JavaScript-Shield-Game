class Wall extends Rectangle{
    constructor(x, y, canvas, width, height, rotation, color) {
        super(x, y, canvas, width, height, rotation ,true, color);

    }

    update(){
        this.draw();
    }


    
}