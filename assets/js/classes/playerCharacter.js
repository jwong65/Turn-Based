class Player{
    constructor({
        collisionBlocks=[]
    }){
        // Variable to determine the bottom of the character's hitbox.
        this.position = {
            charX: 64,
            charY: 64
        }
        this.velocity={
            // We need a x and y axis for each veloctiy
            x: 0,
            y: 0
        }
        this.charWidth = 64;
        this.charHeight = 64;
        // This is charY + height of the character. Need to have a const height so that can be applied to the fillRect.
        this.sides = {
            bottom: this.position.charY + this.charHeight
        }
        this.gravity = 1
        this.collisionBlocks = collisionBlocks
    }
    draw(){
        ctx.fillStyle = '#FF8F8F'
        ctx.fillRect(this.position.charX, this.position.charY, this.charWidth, this.charHeight)
    }
    update(){
        this.position.charX += this.velocity.x
        this.position.charY += this.velocity.y
        this.position.bottom = this.position.charY +this.charHeight
        // Position is being increased consistently by the y velo.
        if( this.sides.bottom +this.velocity.y <canvas.height){
            this.velocity.y+= this.gravity
            this.sides.bottom =this.position.charY + this.charHeight
        } 
        // Need this else statement otherwise it will not stop at the height of the bottom.
        else {
            this.velocity.y =0
            this.position.charY = canvas.height - this.charHeight
        }
    }
}
