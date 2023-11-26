class Sprite{
    constructor({position, imageSource, frameRate =1, animations, frameBuffer = 5, loop = true
    }){
        this.position = position
        this.image = new Image()
        this.image.src = imageSource
        this.image.onload =()=>{
            this.loaded = true
            this.charWidth = this.image.width/frameRate
            this.charHeight = this.image.height
        }
        this.loaded = false
        this.frameRate = frameRate
        // Simialr to how drawImage works this is to get the next frame
        this.currentFrame =0
        // Elapsed frames will increase over time.
        this.elapsedFrames = 0
        // Frame buffer needs to be adjusted to control the animation speed.
        this.frameBuffer  = frameBuffer
        this.animations = animations
        this.loop = loop
        if(this.animations){
            for (let key in this.animations){
                const image = new Image()
                image.src = this.animations[key].imageSource
                this.animations[key].image = image
            }
        }
    }
    draw(){
        //  is so the background will not continue to load if the background is already drawn
        if(!this.loaded) return
        const cropbox={
            position:{
                x:this.charWidth*this.currentFrame,
                y:0
            },
            width: this.charWidth,
            height: this.charHeight
        }
        ctx.drawImage(
            this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.charWidth, 
            this.charHeight)

            this.updateFrame()
        }
        // Similar to my previous idle()
        updateFrame(){
            this.elapsedFrames++
            if(this.elapsedFrames%this.frameBuffer ===0){
                if(this.currentFrame<this.frameRate -1){
                    this.currentFrame++
                }
                else if(this.loop){
                    this.currentFrame=0
                }    
            }
        }
}
