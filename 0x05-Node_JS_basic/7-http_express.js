const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => new Promise((resolve, reject) => {
  const databaseName = process.argv[2];
  if (!databaseName) {
    reject(res.send('Database name is required'));
    return;
  }

  fs.readFile(databaseName, 'utf8')
    .then((data) => {
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

      resolve(res.send(output.trim()));
    });
}));

const port = 1245;
app.listen(port);

// Export the app
module.exports = app;
