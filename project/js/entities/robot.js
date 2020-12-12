const shieldColor="#FB869C";
const clankzap = document.getElementById('hitSound');

class Robot extends Rectangle{
    constructor(x, y, canvas, width, height, canCollide, movementSpeed, hp, color) {
        super(x, y, canvas, width, height, canCollide, color);

        this.movementSpeed = movementSpeed;
        
        //direction of robot
        this.direction = {x:0, y:0}
        
        //hit points
        this.hp = hp;
        this.hpMax= hp;
        
        this.hitSound = clankzap;
        
        this.shield = new Shield(this.x,this.y, this.canvas, this.width, this.height, true, shieldColor, 60);
    }

    update(){
        this.x += this.movementSpeed * this.direction.x;
        this.y += this.movementSpeed * this.direction.y;

        //updates shield (which draws/checks for collision)
        this.shield.update(this);

        //draws the robot out
        this.draw();
    }

    place(xNew, yNew){
        this.x=xNew;
        this.y+=yNew;
        this.draw();
    }

    reset(){
        this.direction.x=0;
        this.direction.y=0;
        
        this.hp=this.hpMax;
        
        this.x = this.spawnX;
        this.y = this.spawnY;
        
        this.shield.reset();
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
                
                //plays hit sound effect
                this.hitSound.play();
                //plays hit sound effect
                this.hp--;
                
                arrows.splice(index, 1);
            }
            else if( this.shield.isTouch(arrow)){
                
                //plays block sound effect
                this.shield.blockSound.play();
                //adds to block count
                this.shield.blockedCount += 1;
                
                arrows.splice(index, 1);
            }
            //console.log(this.hp);
        });
    }

    isDead(){
        if(this.hp <= 0){
            return true
        }
        return false
    }

    
    
}