const { contextBridge, ipcRenderer } = require("electron");

const { getFiles } = require("./utility/fileFunction");

contextBridge.exposeInMainWorld("electron", {
  readDir: (prop) => getFiles(prop),
  // chooseDir: () => {
  //   ipcRenderer.send("select-dirs");
  // },
  openDir: {
    chooseDir() {
      // ipcRenderer.send("select-dirs");
      return ipcRenderer.invoke("select-dirs").then((path) => {
        console.log(path.filePaths[0]);
        return getFiles(path.filePaths[0]);
      });
    },

    getDir() {
      ipcRenderer.on("select-dirs", (event, arg) => {
        console.log(arg);
      });
    },
  },
});
