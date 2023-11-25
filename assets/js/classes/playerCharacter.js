class Player extends Sprite{
    constructor({collisionBlocks=[], imageSource, frameRate}){
        super({imageSource, frameRate});
        // Variable to determine the bottom of the character's hitbox.
        this.position = {
            x: 100,
            y: 32
        }
        this.velocity={
            // We need a x and y axis for each veloctiy
            x: 0,
            y: 0
        }
        // this.charWidth = 32;
        // this.charHeight = 32;
        // This is y position + height of the character. Need to have a const height so that can be applied to the fillRect.
        this.sides = {
            bottom: this.position.y + this.charHeight
        }
        this.gravity = 1
        this.collisionBlocks = collisionBlocks
    }
    update(){
        // Testing for hitbox
        // ctx.fillStyle = 'rgba(0,0,225,0.25)'
        // ctx.fillRect(this.position.x, this.position.y, this.charWidth, this.charHeight)
        this.position.x += this.velocity.x
        // Horizontal collision
        this.checkforHorizontal()
        this.applyGravity()

        // This is unneccesary because I resized the image to be exact pixels
        this.hitbox={
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            charWidth: 32,
            charHeight: 32
        }
        ctx.fillStyle='rgba(0,0,200, 0.25)'
        ctx.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.charWidth, this.hitbox.charHeight)

        this.checkforVertical()
        this.sides.bottom = this.position.y + this.charHeight;        
    }
    checkforHorizontal(){
            
    for (let i=0; i<this.collisionBlocks.length; i++){
        const collisionBlock = this.collisionBlocks[i]

        if(
            this.position.x <=collisionBlock.position.x+ collisionBlock.width &&
            this.position.x + this.charWidth >= collisionBlock.position.x &&
            this.position.y + this.charHeight >= collisionBlock.position.y &&
            this.position.y <= collisionBlock.position.y + collisionBlock.height
        ){
            if(this.velocity.x < 0){
                this.position.x =
                    collisionBlock.position.x + collisionBlock.width + 0.01 
                break
            }
            if(this.velocity.x > 0){
                this.position.x = collisionBlock.position.x - this.charWidth - 0.01
                break
            }
        }
    }
}
    applyGravity(){
            this.velocity.y += this.gravity
            this.position.y += this.velocity.y
    }
    checkforVertical(){
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];
            if (
                this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.charWidth >= collisionBlock.position.x &&
                this.position.y + this.charHeight >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01;
                    break;
                }
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionBlock.position.y - this.charHeight - 0.01;
                    break;
                }
            }
        }
    }
}

