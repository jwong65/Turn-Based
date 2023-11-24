
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
            if (player.velocity.y < 0) {
                player.velocity.y = 0;
            }
            break
        // case 's'
    }
})