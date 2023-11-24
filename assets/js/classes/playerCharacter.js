class Player{
    constructor(){
        // Variable to determine the bottom of the character's hitbox.
        this.position = {
            charX: 100,
            charY: 100
        }
        this.charWidth = 100,
        this.charHeight = 100
        // This is charY + height of the character. Need to have a const height so that can be applied to the fillRect.
        this.sides = {
            bottom: this.position.charY + this.charHeight
        }
    }
    draw(){
        ctx.fillStyle = '#FF8F8F'
        ctx.fillRect(this.position.charX, this.position.charY, this.charWidth, this.charHeight)
    }
    update(){
        if( this.sides.bottom <canvas.height){
            this.position.charY++
            this.sides.bottom =this.position.charY + this.charHeight
        }

    }
}
