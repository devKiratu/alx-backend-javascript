interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'Peter',
  lastName: 'Pun',
  age: 25, 
  location: 'Nairobi',
}

const student2: Student = {
  firstName: 'James',
  lastName: 'Bond',
  age: 33,
  location: 'Kisumu',
};

const studentsList: Student[] = [student1, student2];

// create table and append students data
const body: HTMLElement = document.querySelector('body');

const studentsTable: HTMLTableElement = document.createElement('table');

// table headers
const header = studentsTable.createTHead();
const headerRow = header.insertRow();
const nameTh: HTMLTableHeaderCellElement = document.createElement('th');
const locationTh: HTMLTableHeaderCellElement = document.createElement('th');
nameTh.innerHTML = 'FirstName';
locationTh.innerHTML = 'Location';

headerRow.appendChild(nameTh);
headerRow.appendChild(locationTh);

const tbody = studentsTable.createTBody();

studentsList.forEach((student) => {
  const row = tbody.insertRow();
  const name = row.insertCell(0);
  const location = row.insertCell(1);
  name.innerHTML = student.firstName;
  location.innerHTML = student.location;
});

body.appendChild(studentsTable);
