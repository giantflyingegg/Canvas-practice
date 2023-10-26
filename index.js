import CharacterSprite from './js/player.js';
import Platform from './js/platforms.js';

//target canvas element and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//start screen variables
const initialsInput = document.getElementById('initialsInput');
const welcomeScreen = document.getElementById('welcomeScreen');
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);

//Set background image
let backgroundImage = new Image();
backgroundImage.src = 'Images/background.png';

//Draw background image on screen load
backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };


//Set character variable and position
const myCharacter = new CharacterSprite(40, 640); 

//Set platform variables and positions
const platforms = [
    new Platform(0, 660, 200, 20),
    new Platform(300, 660, 200, 20),
    new Platform(600, 660, 200, 20),
    new Platform(1080, 660, 200, 20)
]

//add event listener for keydown
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            console.log('left');
            myCharacter.moveLeft();
            break;
        case 'ArrowRight':
            console.log('right');
            myCharacter.moveRight();
            break;
        case ' ':
            // console.log('jump');    
            myCharacter.jump();
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
            myCharacter.stopHorizontalMovement();
            break;
    }
});


function draw() {
        console.log('draw');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        for (let platform of platforms) {
            platform.draw(ctx);
        }
        myCharacter.update();
        myCharacter.draw(ctx);
        requestAnimationFrame(draw);
    }

//Set welcome screen variables  
function startGame() {
    console.log('start game');
    const initials = initialsInput.value.toUpperCase();
    if (initials.length !== 2) {
        alert("Please enter exactly 2 letters for your initials.");
        return;
    }
    myCharacter.setInitials(initials); // Set initials 
    welcomeScreen.style.display = 'none';
    initGame(initials);
}

function initGame(initials) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Arial';
  ctx.fillText(`Welcome ${initials}`, canvas.width / 2 - 100, canvas.height / 2);
  draw();
}

welcomeScreen.style.display = 'block';
// draw();



