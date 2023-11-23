const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
 
canvas.width = 64*16 
canvas.height = 64*9

// fillRect( x value, y value, width, height)
ctx.fillRect(0,0, canvas.width, canvas.height)

let charY = 100
let charX = 100
ctx.fillStyle='#FF8F8F'
// x, y, width, height
ctx.fillRect(charX, charY, 100,100)

function animationLoop(){
    // Callback to the animation keep animating.
    window.requestAnimationFrame(animationLoop)
}

animationLoop()