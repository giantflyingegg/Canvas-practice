import CharacterSprite from './js/player.js';
import Platform from './js/platforms.js';

//target canvas element and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function restartGame() {
    console.log('restart game');
    // Reset player character state
    myCharacter.x = 40;
    myCharacter.y = 640;
    myCharacter.vx = 0;
    myCharacter.vy = 0;
    // ... reset any other necessary state ...

    // Hide end game modal
    endGameModal.style.display = 'none';

    // Restart the game loop
    isGameOver = false;
    draw();
}


//start screen variables
const initialsInput = document.getElementById('initialsInput');
const welcomeScreen = document.getElementById('welcomeScreen');
const startButton = document.getElementById('startButton');
const endGameModal = document.getElementById('endGameModal');
const endGameMessage = document.getElementById('endGameMessage');
const closeBtn = document.getElementById('closeBtn');
const restartBtn = document.getElementById('restartBtn');

restartBtn.addEventListener('click', restartGame);
closeBtn.addEventListener('click', () => endGameModal.style.display = 'none');
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
    new Platform(880, 660, 400, 20)
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

let isGameOver = false;

function draw() {
        console.log('draw');
        if (isGameOver) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        for (let platform of platforms) {
            platform.draw(ctx);
        }
        myCharacter.update(platforms);
        myCharacter.draw(ctx);
        
        // Check if player has fallen off the screen
        if (myCharacter.y > canvas.height) {
            endGameFallOff();
        }
        
        // Check if player has reached the end of the level
        if (myCharacter.x > 1280) {
        endGameTouchRight();
    }

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

function endGameFallOff() {
    isGameOver = true;
    console.log('Game Over: You fell off!');
    endGameMessage.textContent = 'Game Over: You fell off!';
    endGameModal.style.display = 'block';
}

function endGameTouchRight() {
    isGameOver = true;
    console.log('You Win: You reached the end!');
    endGameMessage.textContent = 'You Win: You reached the end!';
    endGameModal.style.display = 'block';
}



