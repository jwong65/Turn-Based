const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
 
canvas.width = 64*16 
canvas.height = 64*9


let charY = 100
let charX = 100
ctx.fillStyle='#FF8F8F'
// x, y, width, height
ctx.fillRect(charX, charY, 100,100)
// Variable to determine the bottom of the character's hitbox.
// This is charY + height of the character. Need to have a const height so that can be applied to the fillRect.
const height= 100
let bottom = charY+100

function animationLoop(){
    // Callback to the animation keep animating.
    window.requestAnimationFrame(animationLoop)
    // fillRect( x value, y value, width, height) This is the background of the whole canvas.
    ctx.fillStyle='black'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle='#FF8F8F'
    ctx.fillRect( charX, charY, 100, height)
    charY++
}

animationLoop()