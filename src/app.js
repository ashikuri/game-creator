const Spiel = require("spiel-engine")
const path = require("path")
const Helper = require("./helper")
const Frisk = require("./entities/FriskEntity")
const HelloText = require("./entities/HelloTextEntity")

window.addEventListener("DOMContentLoaded", () =>{
  new Spiel.Game({
    darkmode: false,
    load: {
      Frisk: Spiel.Loader.Image(path.join(__dirname, "./sprites/frisk.png")),
      HelloText: Spiel.Loader.Text("こにちわ。", {fontSize: "100px"})
    },
    scene: [
      {
        name: Helper.SceneName.get("hello"),
        entity: {
          HelloText: new HelloText()
        }
      },
      {
        name: Helper.SceneName.get("main"),
        entity: {
          Frisk: new Frisk()
        }
      }
    ]
  }, window.innerWidth, window.innerHeight)
})