const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Contet-type', 'text/html');
    response.statusCode = 200;

    const {url, method} = request;

    if (url === '/') {
        if (method === 'GET') {
            response.end('<h1>This is homepage!</h1>');
        } else {
            response.end(`<h1>Page not found with ${method} request!</h1>`);
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.end('<h1>This is about page!</h1>');
        } else if (method === 'POST') {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1>Hi ${name}, this is about page!</h1>`);
            })

        } else {
            response.end(`<h1>Page not found with ${method} request!</h1>`);
        }
    } else {
        response.end('<h1>Page not found!</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});

// console.log('test server');