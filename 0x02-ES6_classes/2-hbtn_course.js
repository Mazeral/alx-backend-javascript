export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (typeof students !== 'object') {
      throw new TypeError('Students must be an array');
    }
    for (const name of students) {
      if (typeof name !== 'string') {
        throw new TypeError('Students must be an array of string');
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newlength) {
    if (typeof newName !== 'number') {
      throw new TypeError('Number must be a string');
    }
    this._length = newlength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array');
    }
    for (const name of newStudents) {
      if (typeof name !== 'string') {
        throw new TypeError('Students must be an array of string');
      }
    }
    this._students = newStudents;
  }
}
