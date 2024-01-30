import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    const firstLine = 'This is the list of our students\n';
    try {
      const messages = [];
      const courseStudents = await readDatabase(process.argv[2]);
      for (const [field, students] of Object.entries(courseStudents)) {
        messages.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      response.status(200).send(`${firstLine}${messages.join('\n')}`);
    } catch (error) {
      response.status(500).send(`${error.message}`);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const CS = 'CS';
    const SWE = 'SWE';
    if (major === CS) {
      try {
        const allStudents = await readDatabase(process.argv[2]);
        const csStudents = allStudents[CS];
        response.status(200).send(`List: ${csStudents.join(', ')}`);
      } catch (error) {
        response.status(500).send(`${error.message}`);
      }
    } else if (major === SWE) {
      try {
        const allStudents = await readDatabase(process.argv[2]);
        const sweStudents = allStudents[SWE];
        response.status(200).send(`List: ${sweStudents.join(', ')}`);
      } catch (error) {
        response.status(500).send(`${error.message}`);
      }
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}
