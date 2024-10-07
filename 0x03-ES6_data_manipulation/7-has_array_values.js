export default function hasValuesFromArray(set, array) {
  const arrset = new Set([...array]);
  return arrset.isSubsetOf(set);
}
