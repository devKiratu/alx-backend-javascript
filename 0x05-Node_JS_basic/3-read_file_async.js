const fs = require('fs');

const countStudents = (path) => new Promise((resolve) => {
  try {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }
      const displayData = (data) => {
        const lines = data.split('\n');
        let numStudents = 0;
        const courseStudents = {};
        for (let i = 1; i < lines.length; i += 1) {
          if (lines[i].trim()) {
            const line = lines[i].split(',');
            const firstName = line[0];
            const field = line[line.length - 1];
            if (field in courseStudents) {
              courseStudents[field].push(firstName);
            } else {
              courseStudents[field] = [firstName];
            }
            numStudents += 1;
          }
        }
        console.log(`Number of students: ${numStudents}`);
        for (const [field, students] of Object.entries(courseStudents)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
      };
      resolve(displayData(data));
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
});

module.exports = countStudents;
