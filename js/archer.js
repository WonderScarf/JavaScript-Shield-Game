const startcount = 5;
class Archer {
    constructor(canvas, arrowSize, arrowMoveSpeed) {
        this.arrowMoveSpeed = arrowMoveSpeed
        this.canvas = canvas;
        this.arrowSize = arrowSize;
        this.arrows = new Array(startcount);
        this.genereateArrowArray();
    }

    genereateArrowArray(){
        //let arrows = [];
        //console.log(Array.isArray(arrows));
        console.log(this.arrows.length);
        let i = 0;
        while(i < this.arrows.length){
            this.arrows[i] = this.generateArrow();
            console.log(this.arrows[i]);
            i++;
        }
    }

    generateArrow(){
        console.log("apple");
        let spawn = this.randomBorderSpawn();
        return new Arrow(spawn.x, spawn.y, this.canvas, this.arrowSize, this.arrowMoveSpeed, this.changeToRandomColor(), spawn.directionX, spawn.directionY);
    }

    addArrow(){
        this.arrows.push(this.generateArrow());
    }

    removeOutofBoundArrows(index){
        
    }

    randomBorderSpawn(){
        let spawnX = 0;
        let spawnY = 0;
        let directionX = 0; 
        let directionY = 0;

        switch( Math.floor(Math.random() * 4) ){
            case 0:
                spawnX = this.arrowSize + Math.random() * (this.canvas.width - (this.arrowSize * 2));
                spawnY = 0;
                directionY = 1;
                directionX = 0;
                break;
            case 1:
                spawnX =  this.arrowSize + Math.random() * (this.canvas.width - (this.arrowSize * 2));
                spawnY = this.canvas.height;
                directionY = -1;
                directionX = 0;
                break;
            case 2:
                spawnX = 0;
                spawnY =  this.arrowSize +  Math.random() * (this.canvas.height - (this.arrowSize * 2));
                directionY = 0;
                directionX = 1;
                break;
            case 3:
                spawnX = this.canvas.width;
                spawnY =  this.arrowSize +  Math.random() * (this.canvas.height - (this.arrowSize * 2));
                directionY = 0;                
                directionX = -1;
                break;
        }
        console.log(spawnX, spawnY, directionX, directionY);

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
        this.arrows.forEach(arrow => {
            arrow.update();
        });
    }
};
