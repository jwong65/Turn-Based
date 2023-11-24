const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
//  64*16 64*9
canvas.width = 1024 
canvas.height = 576

const player = new Player()

const keyName  =['w','a','d','ArrowUp','ArrowLeft','ArrowRight']
const keys = {};
keyName.forEach(key=>{
    keys[key] = {pressed: false}
})

function animationLoop(){
    // Callback to the animation keep animating.
    window.requestAnimationFrame(animationLoop)
    // fillRect( x value, y value, width, height) This is the background of the whole canvas.
    ctx.fillStyle='black'
    ctx.fillRect(0,0, canvas.width, canvas.height)

    player.velocity.x = 0
    if (keys.d.pressed){
        player.velocity.x =5;
    }else if (keys.a.pressed){
        player.velocity.x =-5
    }
    console.log("keys.d.pressed:", keys.d.pressed);
    console.log("keys.a.pressed:", keys.a.pressed);
    console.log("player.velocity.x:", player.velocity.x);


    // This will call the draw function from the Player class.
    player.draw()
    // This will continue the update the character 
    player.update()

}
animationLoop()

window.addEventListener('keydown', (event)=>{
    // console.log(event)
    switch(event.key){
        case 'w':
        case 'ArrowUp':
            if (player.velocity.y === 0)
            {
                player.velocity.y = -15
            }
            break
        case 'a':
        case 'ArrowLeft':
            keys.a.pressed =true
            break
        case 'd':
        case 'ArrowRight':
            keys.d.pressed = true
            break
        // case 's'
    }
})

window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case 'a':
        case 'd':
        case 'ArrowLeft':
        case 'ArrowRight':
            keys.a.pressed = false
            keys.d.pressed = false
            break
        case 'w':
        case 'ArrowUp':
            player.velocity.y = 0
            break
        // case 's'
    }
})