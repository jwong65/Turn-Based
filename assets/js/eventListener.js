
window.addEventListener('keydown', (event)=>{
    // console.log(event)
    switch(event.key){
        case 'w':
        case 'ArrowUp':
            for (let i=0; i<doors.length; i++){
                const door = doors[i]
                if(player.position.x <= door.position.x + door.charWidth &&
                    player.position.x + this.charWidth >= door.position.x &&
                    player.position.y + this.charHeight >= door.position.y &&
                    player.position.y <= door.position.y + door.charHeight){
                        console.log('hello door.')
                    }
                
            }
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
            if (player.velocity.y < 0) {
                player.velocity.y = 0;
            }
            break
        // case 's'
    }
})