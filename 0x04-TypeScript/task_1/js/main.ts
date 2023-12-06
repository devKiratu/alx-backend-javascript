interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => string;
}

const printTeacher: printTeacherFunction['printTeacher'] = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
}
