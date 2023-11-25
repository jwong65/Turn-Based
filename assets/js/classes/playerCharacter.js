class Player extends Sprite{
    constructor({collisionBlocks=[], imageSource}){
        super({position: {x: 100, y: 32}, imageSource});
        // Variable to determine the bottom of the character's hitbox.
        // this.position = {
        //     charX: 100,
        //     charY: 32
        // }
        this.velocity={
            // We need a x and y axis for each veloctiy
            x: 0,
            y: 0
        }
        this.charWidth = 64;
        this.charHeight = 64;
        // This is charY + height of the character. Need to have a const height so that can be applied to the fillRect.
        this.sides = {
            bottom: this.position.y + this.charHeight
        }
        this.gravity = 1
        this.collisionBlocks = collisionBlocks
    }
    update(){
        this.position.x += this.velocity.x
        // Horizontal collision
        this.checkforHorizontal()
        this.applyGravity()
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

