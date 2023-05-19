const routes = [
    {
        method : 'GET',
        path : '/',
        handler : (request, h) => {
            const {name, location} = request.query;
            return `Hello, ${name} from ${location}`;
        },
    },
    {
        method : '*',
        path : '/',
        handler : (request, h) => {
            return 'Page cannot access with that method!';
        },
    },
    {
        method : 'GET',
        path : '/about',
        handler : (request, h) => {
            return 'About Page!';
        },
    },
    {
        method : '*',
        path : '/{any*}',
        handler : (request, h) => {
            return 'Page not found!';
        },
    },
    {
        method : 'GET',
        path : '/users/{username?}',
        handler : (request, h) => {
            const {username = 'user'} = request.params;
            return `Hello, ${username}!`;
        }
    },
    {
        method : 'GET',
        path : '/hello/{name?}',
        handler : (request, h) => {
            const {name = 'user'} = request.params;
            const {lang} = request.query;
            if (lang === 'id') {
                return `Hai ${name}`;
            }
            return `Hello, ${name}!`;
        }
    },
    {
        method : 'POST',
        path : '/login',
        handler : (request, h) => {
            const {username, password} = request.payload;
            return `welcome ${username}!`;
        },
    },
    {
        method : 'POST',
        path : '/user',
        handler : (request, h) => {
            return h.response('created').code(201);
        }
    },

    {
        method : 'GET',
        path : '/test/detailed-notaion',
        handler : (request, h) => {
            const response = h.response('success');
            response.type('text/plain');
            response.header('X-Custom', 'some-value');
            return response;
        }
    },
    {
        method : 'GET',
        path : '/test/chained-notation',
        handler : (request, h) => {
            return h.respone('success').type('text/plaint').header('X-Custom', 'some-value');
        }
    },
];

module.exports = routes;