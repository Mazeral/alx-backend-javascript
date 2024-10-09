namespace Subjects{
	export interface class Subject{
		public teacher: Teacher;
		setTeacher(teacher){
		teacher.firstName = teacher.firstName;
		teacher.lastName = teacher.lastName;
	}
	}
}
