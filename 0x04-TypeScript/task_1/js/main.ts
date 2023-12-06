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

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName:string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() : string {
    return 'Currently working';
  }

  displayName() : string {
    return this.firstName;
  }
}
