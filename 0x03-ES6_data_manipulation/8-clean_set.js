export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
	return '';
  }

  let result = '';
  
  set.forEach((value) => {
	if (value.startsWith(startString)) {
	  result += `${value.slice(startString.length)}-`;
	}
  });
  
  // Remove the last hyphen if it exists
  return result.endsWith('-') ? result.slice(0, -1) : result;
}
