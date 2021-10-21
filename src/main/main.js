const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const path = require("path");

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
      enableremotemodule: false,
      preload: path.join(__dirname, "..", "src", "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");
  mainWindow.openDevTools();
  console.log(some);
}

// ipcMain.on("select-dirs", async (event) => {
//   const result = await dialog.showOpenDialog(mainWindow, {
//     properties: ["openDirectory"],
//   });
//   event.sender.send("eventFromMain", result.filePaths);
//   console.log("directories selected", result.filePaths);
// });

// ipcMain.on("select-dirs", async (event) => {
//   console.log("Webcontent", BrowserWindow.fromWebContents(event.sender).id);
//   const result = await dialog.showOpenDialog(mainWindow, {
//     properties: ["openDirectory"],
//   });
//   console.log("directories selected", result.filePaths);
// });

ipcMain.handle("select-dirs", async (event) => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory"],
  });

  return result;
});

app.whenReady().then(createWindow);
