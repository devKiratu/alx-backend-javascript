export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  const gradedStudents = cityStudents.map((student) => {
    const gradeEntry = newGrades.find((entry) => entry.studentId === student.id);
    if (!gradeEntry) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: gradeEntry.grade };
  });
  return gradedStudents;
}
