const http = require('http');

const requestListener = (request, response) => {

    // response.write('<html>');
    // response.write('<body>');
    // response.write('<h1>Hi ajar!</h1>');
    // response.write('</body>');
    // response.write('</html>');
    // response.end('<html><body><h1>Hello, World!</h1></body></html>');

    // response.setHeader('Contet-Type', 'text/html');
    response.setHeader('Contet-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    response.statusCode = 200;
    // response.statusCode = 404;
    // response.statusMessage = 'User is not found!';

    const {url, method} = request;

    if (url === '/') {
        if (method === 'GET') {
            response.statusCode = 200;
            // response.end('<h1>This is homepage!</h1>');
            response.end(JSON.stringify({
                message : `This is homepage!`,
            }));
        } else {
            response.statusCode = 400;
            // response.end(`<h1>Page not found with ${method} request!</h1>`);
            response.end(JSON.stringify({
                message : `Page not found with ${method} request!`,
            }));
        }
    } else if (url === '/about') {
        if (method === 'GET') {
            response.statusCode = 200;
            // response.end('<h1>This is about page!</h1>');
            response.end(JSON.stringify({
                message : `This is about page!`,
            }));
        } else if (method === 'POST') {
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                // response.end(`<h1>Hi ${name}, this is about page!</h1>`);
                response.end(JSON.stringify({
                    message : `Hi ${name}, this is about page!`,
                }));
            })

        } else {
            response.statusCode = 400;
            // response.end(`<h1>Page not found with ${method} request!</h1>`);
            response.end(JSON.stringify({
                message : `Page not found with ${method} request!`,
            }));
        }
    } else {
        response.statusCode = 404;
        // response.end('<h1>Page not found!</h1>');
        response.end(JSON.stringify({
            message : 'Page not found!',
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});

// console.log('test server');