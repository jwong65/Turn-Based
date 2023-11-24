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