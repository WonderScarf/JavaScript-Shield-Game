class Rectangle extends Thing{
    
    constructor(x, y, canvas, width, height, rotation, canCollide, color) {
        
        super(x, y, canvas, width, height, canCollide);
        
        this.rotation = rotation;

        this.area = width * height;
        this.perimeter = (width * 2) + (height * 2);

        this.color = color;
    }

    //draws the bubble object based on it's current x and y place
    draw() {
        this.canvas.getContext('2d').save();  
        this.canvas.getContext('2d').translate(this.x, this.y);
        this.canvas.getContext('2d').rotate(this.rotation * Math.PI / 180); //rotate the canvas
        this.canvas.getContext('2d').fillStyle = this.color;
        this.canvas.getContext('2d').fillRect(0, 0, this.width, this.height); //at 0,0 of transformed canvas
        this.canvas.getContext('2d').restore();
    }
    
}