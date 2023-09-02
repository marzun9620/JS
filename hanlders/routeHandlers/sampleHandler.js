/*
Program Name ==
Description ===
Author ==
Date == 2023-09-01 23:47:56
*/
const handler = {};
handler.sampleHandler = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(200, {
        message: 'This is a sample url',
    });
};
module.exports = handler;
