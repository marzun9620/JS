/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/*
Program Name == https://youtu.be/Xg4effPSJXk?si=FdnNettapxyc4CHw
Description ===
Author == marzun
Date == 29/08/23
*/

// Dependencies
const http = require('http');

// eslint-disable-next-line import/extensions
const { handleResReq } = require('N:/SDP-1/JS_git/JS/helper/handleRequest.js');
const env = require('./helper/environment');

const data = require('./lib/data');

// App object - module scaffolding
const app = {};
// data write
data.create('test', 'newFile', { name: 'Bangladesh', lang: 'Bangla' }, (err) => {
    console.log('Error was', err);
});
data.read('test', 'newFile', (err, data1) => {
    console.log('Data is', data1);
});
data.update('test', 'newFile', { name: 'India' }, (err) => {
    console.log(err);
});
data.delete('test', 'newFile', (err) => {
    console.log(err);
});
// Configuration
// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.on('error', (err) => {
        console.error(`Server error: ${err.message}`);
    });

    server.listen(env.port, () => {
        // console.log(`Env id ${process.env.NODE_ENV}`);
        console.log(`Listening to port Number : ${env.port}`);
    });
};

// Handle request response
app.handleReqRes = handleResReq;
app.createServer();
