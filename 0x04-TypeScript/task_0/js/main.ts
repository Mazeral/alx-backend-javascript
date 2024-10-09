interface Student{
	firstName: string;
	lastName: string;
	age: Number;
	location: string;
}

const student1: Student = {
	firstName: 'Mohammad',
	lastName: 'Siddiq',
	age: 22,
	location: 'Sudan'
}

const student2: Student = {
	firstName: 'Saad',
	lastName: 'Omar',
	age: 18,
	location: 'Sudan'
}

const studentList : Student[] = [student1, student2]
const table = document.createElement('table');
// Create the header row
const headerRow = table.insertRow(0);
const headerFirstName = headerRow.insertCell(0);
headerFirstName.textContent = 'First Name';
const headerLocation = headerRow.insertCell(1);
headerLocation.textContent = 'Location';

// Render the students data into the table
studentList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

// Append the table to the body of the document
document.body.appendChild(table);
