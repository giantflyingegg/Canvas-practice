// console.log('playerloaded');

const ctx = canvas.getContext('2d');

class CharacterSprite {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = 5; // horizontal velocity
        this.vy = 0; // vertical velocity
        this.isJumping = false;
        this.gravity = 0.5;
        this.jumpStrength = -10; // negative because canvas Y is inverted
    }

    draw(ctx) {


    // body
    ctx.beginPath();
    ctx.arc(this.x, this.y, 25, 0, Math.PI, true);
    ctx.fillStyle = "#06330c";    
    ctx.fill();
    ctx.closePath();

    // //head
    ctx.beginPath();
    ctx.roundRect(this.x+8, this.y-35, 20, 15, 7);
    ctx.fillStyle = "#118c21";
    ctx.fill();
    ctx.closePath();

    // //eye
    ctx.beginPath();
    ctx.arc(this.x+17, this.y-30, 2, 0, Math.PI *2, true);
    ctx.fillStyle = "black";    
    ctx.fill();
    ctx.closePath();

    // ///mouth
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(this.x+19, this.y-24);
    ctx.lineTo(this.x+27, this.y-24);
    ctx.stroke();

    // //back foot
    ctx.beginPath();
    ctx.arc(this.x-15, this.y, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    //front foot
    ctx.beginPath();
    ctx.arc(this.x+13, this.y, 6, 0, Math.PI, false);
    ctx.fillStyle = "#118c21";
    ctx.fill(); 
    ctx.closePath();

    // //shell initials
    // ctx.font = '24px Arial';
    // ctx.fillStyle = 'white';
    // ctx.fillText('1', this.x-8, this.y-4);

    }

    update() {
        // Gravity effect
        this.vy += this.gravity;

        this.y += this.vy;
        if (this.y > canvas.height - 25) {
            this.y = canvas.height - 25;
            this.isJumping = false;
        }
    }
    
    moveLeft() {
        this.x -= this.vx;
    }

    moveRight() {
        this.x += this.vx;
    }

    jump() {
        if (!this.isJumping) {
            this.vy = this.jumpStrength;
            this.isJumping = true;
        }
    }

}

export default CharacterSprite;