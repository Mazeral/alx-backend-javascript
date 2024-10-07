export default function getStudentIdsSum(studArr) {
  const initial = 0;
  const ids = studArr.map((value) => value.id);
  return ids.reduce((accumelator, currentValue) => accumelator + currentValue, initial);
}
