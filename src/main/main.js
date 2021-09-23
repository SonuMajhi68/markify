const { app, BrowserWindow } = require("electron");
// const path = require("path");
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
    },
  });

  mainWindow.loadFile("index.html");
  mainWindow.openDevTools();
}

app.whenReady().then(createWindow);
