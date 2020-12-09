class Rectangle extends Thing{
    
    constructor(x, y, canvas, width, height, canCollide, color) {
        
        super(x, y, canvas, width, height, canCollide);

        this.area = width * height;
        this.perimeter = (width * 2) + (height * 2);

        this.color = color;
    }

    draw() {
        this.canvas.getContext('2d').save();  
        this.canvas.getContext('2d').translate(this.x, this.y);
        this.canvas.getContext('2d').fillStyle = this.color;
        this.canvas.getContext('2d').fillRect(0, 0, this.width, this.height); //at 0,0 of transformed canvas
        this.canvas.getContext('2d').restore();
    }

    isTouch(otherRectangle){
        let istouch = false;

        if( ((this.y + this.height) > otherRectangle.y) && (this.y < (otherRectangle.y + otherRectangle.height)) && ((this.x + this.width) > otherRectangle.x) && (this.x < (otherRectangle.x + otherRectangle.width))){
            istouch = true;
        }
        return istouch;
    }
    
}