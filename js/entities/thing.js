class Thing {
    constructor(x, y, canvas, width, height, canCollide) {
        
        //The current x/y location on the canvas
        this.x=x;
        this.y=y;

        //the canvas to 
        this.canvas=canvas;

        //Porportions
        this.width=width;
        this.height=height;

        //if it has a hitbox or not 
        this.canCollide=canCollide;
    }

    log(){
        let log = 'Width: ' + this.width + ' Height: ' + this.height + ' X: ' + this.width +  ' Y: ' +  this.height;
        return log;
    }

}
