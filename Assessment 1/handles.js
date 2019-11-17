// ./handles.js
// Role: server's callback

// Necessary imports

//Import Node url module
const url = require('url')
//Import Node querystring module
const qs = require('querystring')

// Export the function
module.exports = {
    serverHandle: function (req, res) {
        // Retrieve the current path with query parameters
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)

        // Write a response header (important)
        res.writeHead(200, {'Content-Type': 'text/plain'});

        // Condition:url [+ parameter] on route
        if (path === '/hello' && 'name' in params) {
            // Write response content with name value and a short sentence
            res.write('Hello ' + params['name'] + '\n\nAs an engineering student in Information Sytem, you are having your first course of NodeJS.')
        } 
        // Condition: only path '/hello'
        else if (path === '/hello') {
            // Write a simple response content
            res.write('Hello ')
        } 
        // Otherwise
        else {
            // Reply a 404 code with a not found message
            res.write('404 Not Found')
        }
        
        res.end();
    } 
}