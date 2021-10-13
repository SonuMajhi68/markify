const { remote, contextBridge } = require("electron");

const { getFiles } = require("./utility/fileFunction");

contextBridge.exposeInMainWorld("electron", {
  remoteApi: {
    createLog() {
      console.log(remote);
    },
  },

  readDir: (prop) => getFiles(prop),
});
