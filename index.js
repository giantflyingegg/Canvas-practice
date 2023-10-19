import CharacterSprite from './js/player.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let backgroundImage = new Image();
backgroundImage.src = 'Images/background.png';

backgroundImage.onload = function() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

const myCharacter = new CharacterSprite(400, 200); 

function draw() {
        console.log('draw');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        myCharacter.draw(ctx);
        requestAnimationFrame(draw);
    }

    draw();


