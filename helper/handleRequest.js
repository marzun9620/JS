/*
Program Name == Your Program Name Here
Description == A brief description of what your program does
Author == Your Name Here
Date == 2023-08-31 13:50:00
*/

const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../hanlders/routeHandlers/notFoundHandler');

const handler = {};
handler.handleResReq = (req, res) => {
    // Parsing the URL
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStream = parseUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStream,
        headersObject,
    };

    // Setting up string decoder for the incoming request
    const decode = new StringDecoder('utf-8');
    let str = '';
    const chooseHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    // Collecting the incoming data payload
    req.on('data', (buffer) => {
        str += decode.write(buffer);
    });

    // End of request, handling the request data and sending a response
    req.on('end', () => {
        str += decode.end();
        chooseHandler(requestProperties, (statusCode, payload) => {
            // eslint-disable-next-line no-param-reassign
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            // eslint-disable-next-line no-param-reassign
            payload = typeof payload === 'object' ? payload : [];
            const payloadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadString);
        });
        console.log(str); // Printing the incoming request payload
        res.end('Hello hii');
    });
};

// Exporting the handler
module.exports = handler;
