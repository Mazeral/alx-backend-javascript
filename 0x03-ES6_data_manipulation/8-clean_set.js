export default function cleanSet(set, startString) {
  // If startString is empty or not a string, return an empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Initialize an array to store the resulting values
  const result = [];

  // Iterate over the set
  set.forEach((value) => {
    // Check if the value starts with startString
    if (value.startsWith(startString)) {
      // Append the substring after startString to the result array
      result.push(value.slice(startString.length));
    }
  });

  // Join the array with '-' and return it as a string
  return result.join('-');
}
