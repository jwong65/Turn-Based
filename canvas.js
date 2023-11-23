const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
 
canvas.width = 64*16 
canvas.height = 64*9

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

const player = new Player()

function animationLoop(){
    // Callback to the animation keep animating.
    window.requestAnimationFrame(animationLoop)
    // fillRect( x value, y value, width, height) This is the background of the whole canvas.
    ctx.fillStyle='black'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    // This will call the draw function from the Player class.
    player.draw()
    // This will continue the update the character 
    player.update()

}
animationLoop()