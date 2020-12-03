//canvas data
const firstCanvas = document.getElementsByTagName("canvas")[0];
const firstCanvasContext = firstCanvas.getContext('2d');
const robotColor = "#FFFFFF";


//controls
const controls = { up:"w", down:"s", left:"a", right:"d"};
const shieldControls = { up:"ArrowUp", down:"ArrowDown", left:"ArrowLeft", right:"ArrowRight"};

let GetKeyPush = (event) => {
    if (event.key == controls.up) {testRobot.currentDirection.y=-1;}
    if (event.key == controls.down) {testRobot.currentDirection.y=1;}
    if (event.key == controls.left) {testRobot.currentDirection.x=-1;}
    if (event.key == controls.right) {testRobot.currentDirection.x=1;}

    if(event.key == shieldControls.up){testRobot.shields[0].enabled=true;}
    if(event.key == shieldControls.down){testRobot.shields[1].enabled=true;}
    if(event.key == shieldControls.left){testRobot.shields[2].enabled=true;}
    if(event.key == shieldControls.right){testRobot.shields[3].enabled=true;}
    event.preventDefault();
}

let GetKeyUp = (event) => {
    if (event.key == controls.up) {testRobot.currentDirection.y++;}
    if (event.key == controls.down) {testRobot.currentDirection.y--;}
    if (event.key == controls.left) {testRobot.currentDirection.x++;}
    if (event.key == controls.right) {testRobot.currentDirection.x--}
    
    if(event.key == shieldControls.up){testRobot.shields[0].enabled=false;}
    if(event.key == shieldControls.down){testRobot.shields[1].enabled=false;}
    if(event.key == shieldControls.left){testRobot.shields[2].enabled=false;}
    if(event.key == shieldControls.right){testRobot.shields[3].enabled=false;}
    event.preventDefault();

}

function animate() {

    requestAnimationFrame(animate);
    firstCanvasContext.clearRect(0, 0, firstCanvas.width, firstCanvas.height);
    testRobot.canvasCollideFix();
    testRobot.update();

}

//creating robot
let testRobot = new Robot(250, 250, firstCanvas, 50, 50, 0, true, 3 , robotColor);
testRobot.initializeShields()
firstCanvas.focus();

firstCanvas.addEventListener('keydown', GetKeyPush);
firstCanvas.addEventListener('keyup', GetKeyUp);

animate();

