export default function getStudentsByLocation(arrObj, location) {
  // filter works by returning the items that returns true inside the block
  // without the return keyword in the block, nothing will be returned
  return arrObj.filter((item) => item.location === location);
}
