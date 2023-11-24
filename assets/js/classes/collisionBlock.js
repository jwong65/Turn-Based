class CollisionBlock{
    constructor({position}){
        this.position = position
        // Each tile is 32 by 32
        this.width = 32
        this.height = 32
    }
    draw(){
        ctx.fillStyle = 'rgba(255, 0, 0, .5)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}
