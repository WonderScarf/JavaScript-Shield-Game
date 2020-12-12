//canvas data
const firstCanvas = document.getElementsByTagName("canvas")[0];
const firstCanvasContext = firstCanvas.getContext('2d');
const robotColor = "#FFFFFF";
const speedArrow = 5;
const robotSpeed = 3;
const arrowSpawnRate = 200;


//controls
const controls = { up:"w", down:"s", left:"a", right:"d"};
const shieldControls = { up:"ArrowUp", down:"ArrowDown", left:"ArrowLeft", right:"ArrowRight"};
const altControls = {restart:"r", quit:"q"}

let isPlaying = false;

let GameOverScreen = () => {
    //shows game over
    firstCanvasContext.save();  
    firstCanvasContext.fillStyle = "#deb5bd"
    firstCanvasContext.font = '3rem Fredoka One';
    firstCanvasContext.fillText("Game Over", firstCanvas.width/3,firstCanvas.height/4);
    
    firstCanvasContext.fillStyle = "#deb5bd"
    firstCanvasContext.font = '1.25rem Fredoka One';
    firstCanvasContext.fillText("You Burnt Out... Try Again With 'R' or Quit With 'Q'", firstCanvas.width/6, firstCanvas.height/3);
    firstCanvasContext.restore();
}

let UpdateGameScreen = () => {
    //The updating of things
    testRobot.canvasCollideFix();
    archer.update();
    testRobot.update();
    testRobot.arrowCollideFix(archer.arrows);

    //updates tally
    document.getElementById("block_tally").innerText = testRobot.shield.blockedCount;
    document.getElementById("hp_tally").innerText = testRobot.hp;

}

let MainMenuScreen = () => {
    isPlaying = false;
    let msg = "To start Press 'R'!";
    firstCanvasContext.fillStyle = "#deb5bd";


    firstCanvasContext.font = '1.25rem Fredoka One';
    firstCanvasContext.fillText(msg, (firstCanvas.width /2) - (firstCanvasContext.measureText(msg).width /2), 250);
    firstCanvasContext.restore();
    
}

let ResetGame = () => {
    testRobot.reset();
    archer.reset();
}

//Get key inputs (for controls)
let GetKeyPush = (event) => {
    if (event.key == controls.up) {testRobot.direction.y=-1;}
    if (event.key == controls.down) {testRobot.direction.y=1;}
    if (event.key == controls.left) {testRobot.direction.x=-1;}
    if (event.key == controls.right) {testRobot.direction.x=1;}

    if(event.key == shieldControls.up){ testRobot.shield.direction.y=-1; testRobot.shield.enabled = true;}
    if(event.key == shieldControls.down){ testRobot.shield.direction.y=1; testRobot.shield.enabled = true;}
    if(event.key == shieldControls.left){ testRobot.shield.direction.x=-1; testRobot.shield.enabled = true;}
    if(event.key == shieldControls.right){ testRobot.shield.direction.x=1; testRobot.shield.enabled = true;}
    event.preventDefault();
}

let GetKeyUp = (event) => {

    if (event.key == altControls.restart) {isPlaying = true; ResetGame();}
    if (event.key == altControls.quit) {isPlaying = false; MainMenuScreen();}

    if (event.key == controls.up) {testRobot.direction.y++;}
    if (event.key == controls.down) {testRobot.direction.y--;}
    if (event.key == controls.left) {testRobot.direction.x++;}
    if (event.key == controls.right) {testRobot.direction.x--}
    
    if(event.key == shieldControls.up){testRobot.shield.direction.y++; testRobot.shield.toggle(false)}//testRobot.shield.enabled = false;
    if(event.key == shieldControls.down){testRobot.shield.direction.y--; testRobot.shield.toggle(false)}
    if(event.key == shieldControls.left){testRobot.shield.direction.x++; testRobot.shield.toggle(false)}
    if(event.key == shieldControls.right){testRobot.shield.direction.x--; testRobot.shield.toggle(false)}
    event.preventDefault();

}


function animate() {
    requestAnimationFrame(animate);
    firstCanvasContext.clearRect(0, 0, firstCanvas.width, firstCanvas.height);
    if(!isPlaying){
        MainMenuScreen();
    }
    else if(testRobot.isDead()){
        GameOverScreen();
    }
    else{
        UpdateGameScreen();
    }
}

//creating robot
let testRobot = new Robot(250, 250, firstCanvas, 50, 50, true, robotSpeed , 3 , robotColor);
let archer = new Archer(firstCanvas, 25, speedArrow);

setInterval( () => {
    if(archer.arrows.length < archer.maxArrows && isPlaying){
        archer.addArrow();
    }
}, arrowSpawnRate);

firstCanvas.focus();
firstCanvas.addEventListener('keydown', GetKeyPush);
firstCanvas.addEventListener('keyup', GetKeyUp);
animate();
