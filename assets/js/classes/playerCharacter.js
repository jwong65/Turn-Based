class Player{
    constructor(){
        // Variable to determine the bottom of the character's hitbox.
        this.position = {
            charX: 100,
            charY: 100
        }
        this.velocity={
            // We need a x and y axis for each veloctiy
            x: 0,
            y: 0
        }
        this.charWidth = 100,
        this.charHeight = 100
        // This is charY + height of the character. Need to have a const height so that can be applied to the fillRect.
        this.sides = {
            bottom: this.position.charY + this.charHeight
        }
        this.gravity = 1
    }
    draw(){
        ctx.fillStyle = '#FF8F8F'
        ctx.fillRect(this.position.charX, this.position.charY, this.charWidth, this.charHeight)
    }
    update(){
        this.position.charY += this.velocity.y
        this.position.bottom = this.position.charY +this.charHeight
        // Position is being increased consistently by the y velo.
        if( this.sides.bottom +this.velocity.y <canvas.height){
            this.velocity.y+= this.gravity
            this.sides.bottom =this.position.charY + this.charHeight
        } 
        // Need this else statement otherwise it will not stop at the height of the bottom.
        else this.velocity.y =0

    }
}
