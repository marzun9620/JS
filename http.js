const http = require('http');

const server = http.createServer((req, res) => {
<<<<<<< HEAD
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
=======
    if (res.url === '/') {
        res.write('Hello Word');
        console.log('Marzun');
        res.end();
    } else if (res.url === '/about') {
        res.write('I am marzun');
        res.end();
>>>>>>> b3e0a65dcec64402b08feaf55e042df95fdbb899
    } else {
        res.write('Bye Friends');
        res.end();
    }
});

server.listen(3000);
console.log('Running Server');
