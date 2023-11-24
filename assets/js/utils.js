    // This is to help visualize it like the tutorial tried.
    Array.prototype.parse2D=function(){
        const rows=[]
        // Increment by 32 because that is the width of this map 32*18 tiles.
        for (let i=0; i< this.length; i+=32){
            // This will grab the first 32 tiles and the first row.
            rows.push(this.slice(i, i+32))
        }
    return rows
    }
    

    Array.prototype.createObjectsFrom2D = function (){
        const objects =[]
        this.forEach((row, y) => {
            row.forEach((symbol, x)=>{
                if (symbol === 225){
                    // Each collision will be pushed
                    objects.push(
                        new CollisionBlock({
                            position:{
                                x:x*32,
                                y:y*32
                            },
        
                        })
                    )
        
                }
            })
            
        });
        return objects
    }