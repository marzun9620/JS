const http = require('http');

const server = http.createServer((req, res) => {
    if (res.url === '/') {
        res.write('Hello Word');
        console.log('Marzun');
        res.end();
    } else if (res.url === '/about') {
        res.write('I am marzun');
        res.end();
    } else {
        res.write('Bye Friends');
        res.end();
    }
});

server.listen(3000);
console.log('Running Server');
