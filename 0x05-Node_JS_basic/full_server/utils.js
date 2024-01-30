import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      reject(Error('Cannot load the database'));
    } else {
      const lines = data.split('\n');
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
        }
      }
      resolve(courseStudents);
    }
  });
});

export default readDatabase;
