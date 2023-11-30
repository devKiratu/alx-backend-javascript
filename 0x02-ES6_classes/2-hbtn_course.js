export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateAndAssignName(name);
    this.validateAndAssignLength(length);
    this.validateAndAssignStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this.validateAndAssignName(name);
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this.validateAndAssignLength(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    this.validateAndAssignStudents(students);
  }

  validateAndAssignName(name) {
    if (typeof name === 'string' || name instanceof String) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  validateAndAssignLength(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  validateAndAssignStudents(students) {
    if (Array.isArray(students) && students.every((st) => typeof st === 'string' || st instanceof String)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
