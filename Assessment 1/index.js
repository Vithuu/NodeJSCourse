// ./index.js

// Import a module
const http = require('http')

// import local module handles
const handles = require('./handles')

// Declare an http server
const server = http.createServer(handles.serverHandle);

// Start the server
server.listen(8080)

// curl localhost:8080 or go to http://localhost:8080