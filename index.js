import CharacterSprite from './js/player.js';

//target canvas element and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//Set background image
let backgroundImage = new Image();
backgroundImage.src = 'Images/background.png';

//Draw background image on screen load
backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };

//Set character variable and position
const myCharacter = new CharacterSprite(400, 200); 

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
            console.log('jump');    
            myCharacter.jump();
            break;
    }
});

function draw() {
        // console.log('draw');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        myCharacter.update();
        myCharacter.draw(ctx);
        requestAnimationFrame(draw);
    }


// draw();



