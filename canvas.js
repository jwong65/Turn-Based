const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
//  64*16 64*9
canvas.width = 1024 
canvas.height = 576

const parsedCollisions = collisionsLevel1.parse2D()
const collisionBlocks= parsedCollisions.createObjectsFrom2D()
// console.log(parsedCollisions)

const backgroundLevel = new Sprite({
    // The position will be 0,0 as it draws from the top left.
    position:{
        x: 0,
        y: 0,
    },
    imageSource: './assets/images/Stage1.png'
})
const player = new Player({
    collisionBlocks, 
    imageSource:'./assets/images/character/Owlet_Monster_Idle_4.png',
    frameRate: 4,
    animations:{
        idleFacingRight:{
            frameRate: 4,
            frameBuffer: 11,
            loop: true,
            imageSource:'./assets/images/character/Owlet_Monster_Idle_4.png',
        },
        idleFacingLeft:{
            frameRate: 4,
            frameBuffer: 11,
            loop: true,
            imageSource: './assets/images/character/Owlet_Monster_Idle_Left_4.png'
        },
        walkLeft:{
            frameRate: 6,
            frameBuffer: 11,
            loop: true,
            imageSource: './assets/images/character/Owlet_Monster_Walk_Left_6.png'
        },
        walkRight:{
            frameRate: 6,
            frameBuffer: 11,
            loop: true,
            imageSource: './assets/images/character/Owlet_Monster_Walk_6.png'
        }
    }
})
const doors = [
    new Sprite({
        position:{
            x: 660,
            // y= 400 with the doorOpen
            // y= 428 with DoorOpening.
            y: 428
        },
        imageSource: './assets/images/doorOpening.png',
        frameRate: 7,
        frameBuffer: 10,
        loop: false,
        autoplay: false
    })
]

const keyName  =['w','a','d','ArrowUp','ArrowLeft','ArrowRight']
const keys = {};
keyName.forEach(key=>{
    keys[key] = {pressed: false}
})

let lastTime = performance.now();
function animationLoop(){
    const currentTime = performance.now();
    const deltaTime = (currentTime - lastTime) / 1000; // convert to seconds
    update(deltaTime)
    
    lastTime=currentTime
    // Callback to the animation keep animating.
    window.requestAnimationFrame(animationLoop)

}

function update(deltaTime) {
    // Update game logic based on deltaTime
    // This makes the game frame rate independent
    backgroundLevel.draw()
    collisionBlocks.forEach((collisionBlock)=>{
        collisionBlock.draw()
    })
    // Doors will be animated in the canvas.
    doors.forEach((door)=>{
        door.draw()
    })
    
    player.velocity.x = 0
    if (keys.d.pressed){
        player.switchSprite('walkRight')
        player.velocity.x =1;
        player.lastDirectionface = 'right'
    }else if (keys.a.pressed){
        player.velocity.x =-1
        player.switchSprite('walkLeft')
        player.lastDirectionface = 'left'
    }
    else{
        // If player last pressed walkLeft they should idleFacingLeft.
        if(player.lastDirectionface ==='left'){
            player.switchSprite('idleFacingLeft')
        }else{
            player.switchSprite('idleFacingRight')
        }
    }
    // This will call the draw function from the Player class.
    player.draw()
    // This will continue the update the character 
    player.update()
    player.update(deltaTime);
    // other updates
}

animationLoop()
