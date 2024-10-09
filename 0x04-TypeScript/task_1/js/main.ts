interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience? :number;
	location: string;
	contract?: boolean | any;
}

interface Directors extends Teacher{
	numberOfReports: number;
}

interface StudentClassInterface {
	_firstName:string;
	_lastName:string;
	workOnHomework():string;	
	displayName():string;	
}

interface printTeacherFunction{
	(firstName:string, lastName:string) : string;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string){
	return `${firstName[0]}. ${lastName}`;
}

class StudentClass implements StudentClassInterface {
	public _firstName: string;
	public _lastName: string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;	
		this._lastName = lastName;	
	}

	workOnHomework():string{
		return `Currently working`
	}
	displayName(){
		return this._firstName;
	}
}

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
