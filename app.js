const { app, BrowserWindow } = require("electron")
const path = require("path")

class Window{
  constructor(){
    this.main = null
    this.menu = null
  }
  create(){
    this.main = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "./src/app.js")
      },
      resizable: false,
      thickFrame: false,
    })
    this.main.setAutoHideMenuBar(true)
    this.main.loadFile(path.join(__dirname, "./index.html"))
    this.main.on("closed", () =>{
      this.main = null
    })
  }
}
if(require('electron-squirrel-startup')) app.quit()
let window = new Window()
app.on("ready", window.create)

app.on("window-all-closed", () =>{
  if (process.platform !== "darwin") app.quit()
})

app.on("activate", () =>{
  if (window.main === null) window.create()
})