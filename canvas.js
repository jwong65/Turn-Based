const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
//  64*16 64*9
canvas.width = 1024 
canvas.height = 576

const backgroundLevel = new Sprite({
    // The position will be 0,0 as it draws from the top left.
    position:{
        x: 0,
        y: 0,
    },
    imageSource: './assets/images/Stage1.png'
})
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
    // ctx.fillStyle='black'
    // ctx.fillRect(0,0, canvas.width, canvas.height)
    backgroundLevel.draw()

    player.velocity.x = 0
    if (keys.d.pressed){
        player.velocity.x =4;
    }else if (keys.a.pressed){
        player.velocity.x =-4
    }
    // This will call the draw function from the Player class.
    player.draw()
    // This will continue the update the character 
    player.update()

}
animationLoop()
