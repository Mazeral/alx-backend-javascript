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

  getName() {
    return this._name;
  }

  getLength() {
    return this._length;
  }

  getStudents() {
    return this._students;
  }

  setName(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('newName must be a string');
    }
    this._name = newName;
  }

  setLength(newlength) {
    if (typeof newName !== 'number') {
      throw new TypeError('newNumber must be a string');
    }
    this._length = newlength;
  }

  setStudents(newStudents) {
    if (typeof newStudents !== 'object') {
      throw new TypeError('newStudents must be an array');
    }
    for (const name of newStudents) {
      if (typeof name !== 'string') {
        throw new TypeError('newStudents must be an array of string');
      }
    }
    this._students = newStudents;
  }
}
