const http = require('http');

const server = http.createServer((req, res) => {
    res.end("This is my first response");
});

server.listen(3000);