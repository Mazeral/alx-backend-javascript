const fs = require('fs');

function countStudents() {
  try {
    let students = null;
    let rows = null;
    let results = null;
    const fields = [];
    fs.readFile('database.csv', (err, data) => {
      results = data.toString();
      rows = results.split('\n');
      students = rows.filter((row) => row !== '').map((row) => row.split(','));
      process.stdout.write(`Number of students: ${students.length - 1}\n`);
      // Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
      students.forEach((student) => {
        const field = student[3];
        if (field !== 'field' && fields.indexOf(field) === -1) {
          fields.push(field);
        }
      });
      fields.forEach((field) => {
        let studnetsNumber = 0;
        const studentNames = [];
        students.forEach((student) => {
          if (student[3] === field) {
            studnetsNumber += 1;
          }
          if (student[0] !== 'firstname' && !studentNames.includes(student[0])) {
            if (student[3] === field) studentNames.push(student[0]);
          }
        });
        const studentNamesStr = studentNames.join(', ');
        process.stdout.write(`Number of students in ${field}: ${studnetsNumber} ${studentNamesStr}\n`);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = countStudents();
