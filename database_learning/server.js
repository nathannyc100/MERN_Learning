import http from 'http';

const server = http.createServer((req, res) => {
    //console.log(req);

    res.setHeader('Content-Type', 'text/html');

    res.write('<h1>Hello world</h1>');
    res.end();

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});

