/*
Program Name ==
Description ===
Author ==
Date == 2023-09-02 12:10:56
*/

const fs = require('fs');
const path = require('path');

const lib = {};

// curr directory of the data folder
lib.baseDir = path.join(__dirname, '/../.data/');
// write data to file
// eslint-disable-next-line func-names
lib.create = function (dir, file, data, callBack) {
    // open file for writing
    fs.open(`${lib.baseDir + dir}/${file}.josn`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            //
            const stringData = JSON.stringify(data);
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err1) => {
                        if (!err1) {
                            callBack(false);
                        } else {
                            callBack('Error closing the new file');
                        }
                    });
                } else {
                    callBack('Error writing to file');
                }
            });
        } else {
            callBack('Could not create file . It may already exits');
        }
    });
};

// raed data from file
lib.read = (dir, file, callBack) => {
    fs.readFile(`${lib.baseDir + dir}/${file}.josn`, 'utf8', (err, data) => {
        callBack(err, data);
    });
};
lib.update = (dir, file, data, callBack) => {
    fs.open(`${lib.baseDir + dir}/${file}.josn`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);

            fs.truncate(fileDescriptor, (err5) => {
                if (!err5) {
                    // write to the file and close
                    fs.writeFile(fileDescriptor, stringData, (err3) => {
                        if (!err3) {
                            fs.close(fileDescriptor, (err4) => {
                                if (!err4) {
                                    callBack(false);
                                } else {
                                    callBack('Error closing file');
                                }
                            });
                        } else {
                            callBack('Error writing to file!');
                        }
                    });
                } else {
                    console.log('Error truncating');
                }
            });
        } else {
            console.log('Error updating,File m,ay not exits');
        }
    });
};
lib.delete = (dir, file, callBack) => {
    fs.unlink(`${lib.baseDir + dir}/${file}.josn`, (err) => {
        if (!err) {
            callBack(false);
        } else {
            callBack('error deleteing file');
        }
    });
};
module.exports = lib;
