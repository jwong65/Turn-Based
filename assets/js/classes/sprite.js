class Sprite{
    constructor({position, imageSource, frameRate =1}){
        this.position = position
        this.image = new Image()
        this.image.src = imageSource
        this.image.onload =()=>{
            this.loaded = true
            this.charWidth = this.image.width
            this.charHeight = this.image.height
        }
        this.loaded = false
        this.frameRate = frameRate
    }
    draw(){
        // This is so the background will not continue to load if the background is already drawn
        if(!this.loaded) return
        const cropbox={
            position:{
                x:0,
                y:0
            },
            width: this.width,
            height: this.height
        }
        ctx.drawImage(this.image, cropbox.position.x, cropbox.position.y, cropbox.width, cropbox.height, this.position.x, this.position.y)
    }
}