const { app, BrowserWindow } = require("electron");
const path = require("path");
// const fs = require("fs");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 800,
    minWidth: 1200,
    backgroundColor: "#333333",
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "..", "src", "preload.js")
    },
  });
  
  mainWindow.loadFile("index.html");
  mainWindow.openDevTools();
  console.log(path.join(__dirname, "src", "preload.js"));
}


app.whenReady().then(createWindow);
