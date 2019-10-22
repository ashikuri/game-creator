const { Entity } = require("spiel-engine")
module.exports = class FriskEntity extends Entity.Image{
    init(){
        this.x = 500
        this.y = 200
        this.scale = 3
    }
    redraw(){
        if(this.key.includes("ArrowUp")) this.y -= 1
        if(this.key.includes("ArrowDown")) this.y += 1
        if(this.key.includes("ArrowLeft")) this.x -= 1
        if(this.key.includes("ArrowRight")) this.x += 1
    }
}