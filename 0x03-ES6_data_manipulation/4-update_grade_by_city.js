export default function updateStudentGradeByCity(studArr, location, newGrades) {
  // first we will filter the studArr to make sure that we have the currect location
  // Then, we will go through the new array and look for the id in the newGrades and
  // Update the newGrades
  const list = studArr
    .filter((student) => student.location === location)
    .map((student) => {
      const updatedStudent = { ...student };

      newGrades.map((gradeObj) => {
        if (updatedStudent.id === gradeObj.studentId) {
          updatedStudent.grade = gradeObj.grade;
        }
        return gradeObj;
      });

      if (!('grade' in updatedStudent)) {
        updatedStudent.grade = 'N/A';
      }

      return updatedStudent;
    });

  return list;
}
