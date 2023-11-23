const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
 
canvas.width = 64*16 
canvas.height = 64*9

class Player{
    constructor(){
        this.position = {
            charX: 100,
            charY: 100
        }
        this.charWidth = 100,
        this.charHeight = 100
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

// let charY = 100
// let charX = 100
// ctx.fillStyle='#FF8F8F'
// // x, y, width, height
// ctx.fillRect(charX, charY, 100,100)
// Variable to determine the bottom of the character's hitbox.
// This is charY + height of the character. Need to have a const height so that can be applied to the fillRect.
// const charHeight= 100
// let bottom = charY+100

const player = new Player()

function animationLoop(){
    // Callback to the animation keep animating.
    window.requestAnimationFrame(animationLoop)
    // fillRect( x value, y value, width, height) This is the background of the whole canvas.
    ctx.fillStyle='black'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    // This will call the draw function from the Player class.
    player.draw()
    player.update()

}
animationLoop()