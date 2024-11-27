// Import the http module
const http = require('http');
const url = require('url');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  // Set the HTTP status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  if (pathname === '/') res.end('Hello Holberton School!');
  else if (pathname === '/students') {
    const databaseName = process.argv[2];
    if (!databaseName) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database name is required');
      return;
    }

    fs.readFile(databaseName, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading database file');
        return;
      }

      const results = data.toString();
      const rows = results.split('\n');
      const students = rows.filter((row) => row !== '').map((row) => row.split(','));
      const fields = [];

      let output = `Number of students: ${students.length - 1}\n`;

      students.forEach((student) => {
        const field = student[3];
        if (field !== 'field' && fields.indexOf(field) === -1) {
          fields.push(field);
        }
      });

      fields.forEach((field) => {
        let studentsNumber = 0;
        const studentNames = [];
        students.forEach((student) => {
          if (student[3] === field) {
            studentsNumber += 1;
          }
          if (student[0] !== 'firstname' && !studentNames.includes(student[0])) {
            if (student[3] === field) studentNames.push(student[0]);
          }
        });
        const studentNamesStr = studentNames.join(', ');
        output += `Number of students in ${field}: ${studentsNumber}. List: ${studentNamesStr}\n`;
      });

      res.end(output.trim());
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Set the port number
const port = 1245;

// Start the server and listen on the specified port
app.listen(port);

// Export the app for use in other modules
module.exports = app;
