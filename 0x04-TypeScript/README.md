**README**

**Author:** Mohammad Omar Siddiq

**Project:** TypeScript Exercises

**Description:** This repository contains a series of exercises to practice TypeScript concepts, including interfaces, classes, type guards, and more.

**Tasks:**

### Task 0: Creating an interface for a student

* Create a directory `task_0` and copy the configuration files (`package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`) into it.
* Write an interface `Student` that accepts `firstName`, `lastName`, `age`, and `location` properties.
* Create two students and an array `studentsList` containing them.
* Use Vanilla JavaScript to render a table and append rows for each student.

### Task 1: Let's build a Teacher interface

* Create a directory `task_1` and copy the configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`) into it.
* Write an interface `Teacher` that requires `firstName`, `lastName`, `fullTimeEmployee`, and `location` properties.
* Add an optional `yearsOfExperience` property to the `Teacher` interface.
* Create a function `printTeacher` that takes `firstName` and `lastName` arguments and returns a string.

### Task 2: Extending the Teacher class

* Write an interface `Directors` that extends `Teacher` and requires a `numberOfReports` property.
* Create a function `printTeacher` that takes `firstName` and `lastName` arguments and returns a string.

### Task 3: Printing teachers

* Write a function `printTeacher` that takes `firstName` and `lastName` arguments and returns a string.

### Task 4: Writing a class

* Write a class `StudentClass` that accepts `firstName` and `lastName` arguments in its constructor.
* Add methods `workOnHomework` and `displayName` to the `StudentClass`.

### Task 5: Advanced types Part 1

* Create a directory `task_2` and copy the configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`) into it.
* Write interfaces `DirectorInterface` and `TeacherInterface` that require specific methods.
* Create classes `Director` and `Teacher` that implement these interfaces.
* Write a function `createEmployee` that returns either a `Director` or `Teacher` instance based on the `salary` argument.

### Task 6: Creating functions specific to employees

* Write a function `isDirector` that takes an `employee` argument and returns a boolean.
* Write a function `executeWork` that takes an `employee` argument and calls either `workDirectorTasks` or `workTeacherTasks` based on the employee type.

### Task 7: String literal types

* Write a string literal type `Subjects` that allows only `Math` or `History` values.
* Write a function `teachClass` that takes a `todayClass` argument and returns a string.

### Task 8: Ambient Namespaces

* Create a directory `task_3` and copy the configuration files (`package.json`, `webpack.config.js`, `tsconfig.json`) into it.
* Write an ambient file `crud.d.ts` that declares types for the `crud.js` library.
* Write a file `interface.ts` that declares types for `RowID` and `RowElement`.
* Write a file `main.ts` that uses the `crud.js` library and types from `interface.ts`.

### Task 9: Namespace & Declaration merging

* Create a directory `task_4` and copy the configuration files (`package.json`, `tsconfig.json`) into it.
* Write a namespace `Subjects` that contains interfaces and classes for different subjects.
* Use declaration merging to add properties to the `Teacher` interface.

### Task 10: Update task_4/js/main.ts

* Create and export constants for `Cpp`, `Java`, and `React` subjects.
* Create and export a `Teacher` object `cTeacher` with experience in teaching C.
* Use the `cTeacher` object to demonstrate the methods of each subject.

### Task 11: Brand convention & Nominal typing

* Create a directory `task_5` and copy the configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`) into it.
* Write interfaces `MajorCredits` and `MinorCredits` that define a `credits` property and a brand property.
* Write functions `sumMajorCredits` and `sumMinorCredits` that sum the credits of two subjects.

**Repo:** [alx-backend-javascript](https://github.com/alx-backend-javascript)

**Directory:** 0x04-TypeScript

**Files:** See individual task descriptions for file names and locations.
