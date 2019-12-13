const fs = require('fs');

module.exports = {
    isDirectory: (_path) => {
        try {
            var stat = fs.lstatSync(_path);
            return stat.isDirectory();
        } catch (e) {
            return false;
        }
    },
    getMax: (dirs, files) => Math.max(dirs.length, files.length)
}