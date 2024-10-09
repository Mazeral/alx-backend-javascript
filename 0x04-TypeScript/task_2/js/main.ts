interface DirectorInterface{
    workFromHome():string;
    getCoffeeBreak():string;
    workDirectorTasks():string
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak() :string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface{
	workFromHome(){
		return `Working from home`
	}
	getToWork(){
		return `Getting a coffee break`
	}
	workDirectorTasks(){
		return `Getting to director tasks`
	}
	getCoffeeBreak(){
		return `Getting a coffee break`
	}
}

class Teacher implements TeacherInterface{
	workFromHome(){
		return `Cannot work from home`
	}
	getCoffeeBreak(){
		return `Cannot have a break`
	}
	workTeacherTasks(){
		return `Getting to work`
	}
}

const createEmployee = function (salary: number){
	if (salary < 500)
		return new Teacher()
	else return new Director()
}

const isDirector = function(employee: Teacher | Director): employee is Director{
	if (employee instanceof Director)
		return true;
	return false;
}

const executeWork = function(employee: Teacher | Director){
	if (isDirector(employee))
		employee.workDirectorTasks()
	else employee.workTeacherTasks()
}

type Subjects = "Math" | "History"

const teachClass = function(todayClass: Subjects): string{
	if (todayClass === "Math")
		return "Teaching Math"
	if (todayClass === "History")
		return "Teacher History"
}
