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
    