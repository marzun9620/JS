/*
Program Name ==
Description ===
Author ==
Date == 2023-09-01 23:47:56
*/
const handler = {};
handler.notFoundHandler = (requestProperties, callBack) => {
    console.log(requestProperties);
    callBack(400, {
        message: 'not Found',
    });
};
module.exports = handler;
