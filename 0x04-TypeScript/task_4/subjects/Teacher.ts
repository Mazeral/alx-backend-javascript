export namespace Subjects{
	export interface Teacher{
		firstName: string;
		lastName: string;
	}
	class Subject{
		public teacher: Teacher;
		setTeacher(data: Teacher){
		this.teacher.firstName = data.firstName;
		this.teacher.lastName = data.lastName;
		}
	}
	export class Cpp extends Subject{
    public teacher: Teacher;

    constructor(teacher: Teacher) {
      super();
      this.teacher = teacher;
    }
		getRequirements(){
			return `Here is the list of requirements for Cpp`
		}
		getAvailableTeacher(){
			if (this.teacher.experienceTeachingC !== undefined && this.teacher.experienceTeachingC > 0){
				return `Available Teacher: ${this.teacher.firstName}`
			}
			else return `No available teacher`
		}
	}

	export class React{
		getRequirements(){
			return `Here is the list of requirements for React`
		}
		getAvailableTeacher(teacher: Teacher){
			if (teacher.experienceTeachingReact !== undefined && teacher.experienceTeachingReact > 0)
				return `Available Teacher: ${teacher.firstName}`
			else return `No available teacher`
		}
	}

	export class Java{
		getRequirements(){
			return `Here is the list of requirements for Java`
		}
		getAvailableTeacher(teacher: Teacher){
			if (teacher.experienceTeachingJava !== undefined && teacher.experienceTeachingJava > 0)
				return `Available Teacher: ${teacher.firstName}`
			else return `No available teacher`
		}
	}
}
