const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
//  64*16 64*9
canvas.width = 1024 
canvas.height = 576

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