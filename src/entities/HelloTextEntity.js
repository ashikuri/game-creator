const { Entity } = require("spiel-engine")
const Helper = require("./../helper")

module.exports = class HelloTextEntity extends Entity.Text{
    init(){
        this.x = 100
        this.y = 100
        this.i = 0
    }
    redraw(){
        console.log(this.i)
        if(this.i++ >= 300) this.changeScene(Helper.SceneName.get("main"))
    }
}