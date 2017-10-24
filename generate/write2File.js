var fs = require('fs');

const createJs = (name, content) => new Promise((resolve, reject) => {
    fs.writeFile(name + ".js", content, function (err) {
        if (err) {
            reject(err);
        } else {
            resolve();
        }
    });
});

module.exports = createJs;
