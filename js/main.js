//canvas data
const firstCanvas = document.getElementsByTagName("canvas")[0];
const firstCanvasContext = firstCanvas.getContext('2d');
const robotColor = "#FFFFFF";
const speedArrow = 5;
const robotSpeed = 3;
const arrowSpawnRate = 250;


//controls
const controls = { up:"w", down:"s", left:"a", right:"d"};
const shieldControls = { up:"ArrowUp", down:"ArrowDown", left:"ArrowLeft", right:"ArrowRight"};

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

let updateArrows = () => {
    
};

function animate() {
    requestAnimationFrame(animate);
    firstCanvasContext.clearRect(0, 0, firstCanvas.width, firstCanvas.height);
    testRobot.canvasCollideFix();
    archer.update();
    testRobot.update();
    testRobot.arrowCollideFix(archer.arrows)

}

//creating robot
let testRobot = new Robot(250, 250, firstCanvas, 50, 50, true, robotSpeed , 3 , robotColor);
let archer = new Archer(firstCanvas, 25, speedArrow);

setInterval( () => {
    if(archer.arrows.length < archer.maxArrows){
        archer.addArrow();
    }
    
}, arrowSpawnRate);

firstCanvas.focus();
firstCanvas.addEventListener('keydown', GetKeyPush);
firstCanvas.addEventListener('keyup', GetKeyUp);
animate();
