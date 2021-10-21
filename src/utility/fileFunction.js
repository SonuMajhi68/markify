const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

function getFiles(dir) {
  return readdir(dir).then((files) => {
    const fileStatPromises = files.map((fileName) => {
      return stat(dir + "/" + fileName).then((stats) => {
        const file = {};
        file.filePath = dir + "/" + fileName;
        file.isDirectory = !stats.isFile();

        if (file.isDirectory) {
          file.files = getFiles(file.filePath);
        }

        return file;
      });
    });
    return Promise.all(fileStatPromises);
  });
}

module.exports = { getFiles };
