export default function cleanSet(set, startString) {
  // Check if startString is empty or if set is not provided
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Use Array.from to create an array from the set and filter values
  return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length)) // Remove startString from each value
    .join('-'); // Join them with a hyphen
}
