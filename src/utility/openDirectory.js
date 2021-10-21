// const { dialog, BrowserWindow } = require("electron");
// const { dialog } = require("electron").remote;

function openDir() {
  //   let options = { properties: ["openDirectory"] };
  //   //Synchronous
  //   let dir = dialog.showOpenDialog(options);
  // console.log(dir);
  console.log("dir");
  console.log(dialog);
}

module.exports = { openDir };
