const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
//  64*16 64*9
canvas.width = 1024 
canvas.height = 576

class Sprite{
    constructor({position, imageSource}){
        this.position = position
        this.image = new Image()
        this.image.src = imageSource
        this.image.onload =()=>{
            this.loaded = true
        }
        this.loaded = false
    }
    draw(){
        // This is so the background will not continue to load if the background is already drawn
        if(!this.loaded) return
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}

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
