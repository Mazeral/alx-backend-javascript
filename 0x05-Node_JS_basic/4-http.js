// Import the http module
const http = require('http');

// Create a new HTTP server
const app = http.createServer((req, res) => {
  // Set the HTTP status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello Holberton School!\n');
});

// Set the port number
const port = 1245;

// Start the server and listen on the specified port
app.listen(port);

// Export the app for use in other modules
module.exports = app;
