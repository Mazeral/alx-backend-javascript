export default function getStudentIdsSum(studArr) {
  const initial = 0;
  // gets the array of id, then sums it using reduce
  return studArr.map((value) => value.id)
    .reduce((accumelator, currentValue) => accumelator + currentValue, initial);
}
