console.log('platforms loaded');

const ctx = canvas.getContext('2d');

class Platform {
    constructor(x, y, width, height, color = "white") { 
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.roundRect(this.x, this.y, this.width, this.height, 10);
        ctx.fill();
        ctx.closePath();
    }
}

export default Platform;