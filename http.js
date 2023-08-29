const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write('<body><form method="post" action="/about"><input name="message" /></form>');
        res.end();
    } else if (req.url === '/about' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream finished');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        });
    } else {
        res.write('Bye Friends');
        res.end();
    }
});

server.listen(3000);
console.log('Running Server');
