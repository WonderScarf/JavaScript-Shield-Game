const startcount = 5;
class Archer {
    constructor(canvas, arrowSize, arrowMoveSpeed) {
        this.arrowMoveSpeed = arrowMoveSpeed
        this.canvas = canvas;
        this.arrowSize = arrowSize;

        this.maxArrows = 40;

        this.arrows = new Array(startcount);
        this.genereateArrowArray();
    }

    genereateArrowArray(){
        let i = 0;
        while(i < this.arrows.length){
            this.arrows[i] = this.generateArrow();
            i++;
        }
    }

    generateArrow(){
        let spawn = this.randomBorderSpawn();
        return new Arrow(spawn.x, spawn.y, this.canvas, this.arrowSize, this.arrowMoveSpeed, this.changeToRandomColor(), spawn.directionX, spawn.directionY);
    }

    addArrow(){
        this.arrows.push(this.generateArrow());
    }

    removeOutofBoundArrows(){
        this.arrows = this.arrows.filter( (arrow) => arrow.checkCanvasPass() )
    };
    
    reset(){
        this.arrows.splice(0,this.arrows.length)
        this.arrows.length = startcount;
        this.genereateArrowArray();
    }

    randomBorderSpawn(){
        let spawnX = this.arrowSize;
        let spawnY = this.arrowSize;
        let directionX = 0; 
        let directionY = 0;

        switch( Math.floor(Math.random() * 4) ){
            case 0:
                spawnX = this.arrowSize + Math.random() * (this.canvas.width - (this.arrowSize * 2));
                directionY = 1;
                break;
            case 1:
                spawnX = this.arrowSize + Math.random() * (this.canvas.width - (this.arrowSize * 2));
                spawnY = this.canvas.height - this.arrowSize;
                directionY = -1;
                break;
            case 2:
                spawnY = this.arrowSize +  Math.random() * (this.canvas.height - (this.arrowSize * 2));
                directionX = 1;
                break;
            case 3:
                spawnX = this.canvas.width - this.arrowSize;
                spawnY =  this.arrowSize +  Math.random() * (this.canvas.height - (this.arrowSize * 2));             
                directionX = -1;
                break;
        }

        return {x: spawnX, y: spawnY, directionX: directionX, directionY: directionY};
    }

    changeToRandomColor() {
        var hexLetters = '0123456789ABCDEF';
        var rngColor = '#';
    
        for (var i = 0; i < 6; i++) {
          rngColor += hexLetters[Math.floor(Math.random() * 16)];
        }
    
        return rngColor;
    }

    update(){
        this.removeOutofBoundArrows();
        this.arrows.forEach(arrow => {
            arrow.update();
        });
    }
};
