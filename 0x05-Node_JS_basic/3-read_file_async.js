const fs = require('fs/promises');

function processDatabase(database) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        // Check if the file exists and is a valid file
        const stats = await fs.stat(database);
        if (!stats.isFile()) {
          reject(new Error('Cannot load the database'));
          return; // Stop further execution
        }

        // Read the file asynchronously
        const data = await fs.readFile(database, 'utf-8');

        // Process the data
        const rows = data.trim().split('\n');
        const students = rows.filter((row) => row !== '').map((row) => row.split(','));

        process.stdout.write(`Number of students: ${students.length - 1}\n`);

        // Analyze and display data by field
        const fields = [];
        students.forEach((student) => {
          const field = student[3];
          if (field !== 'field' && !fields.includes(field)) {
            fields.push(field);
          }
        });

        // Collect results for logging and resolve them later
        const results = [];
        fields.forEach((field) => {
          let studentCount = 0;
          const studentNames = [];
          students.forEach((student) => {
            if (student[3] === field) {
              studentCount += 1;
              if (student[0] !== 'firstname' && !studentNames.includes(student[0])) {
                studentNames.push(student[0]);
              }
            }
          });

          const studentNamesStr = studentNames.join(', ');
          results.push(`Number of students in ${field}: ${studentCount}. List: ${studentNamesStr}`);
        });

        // Log results
        results.forEach((result) => process.stdout.write(`${result}\n`));
        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    })();
  });
}

// Execute the function and handle the Promise
processDatabase()
  .then(() => {

  })
  .catch(() => {

  });

module.exports = processDatabase;
