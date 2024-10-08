export default function cleanSet(set, startString) {
  let string = '';
  const array = Array.from(set);
  if (startString === '') return '';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].includes(startString)) {
      string += array[i].replace(startString, '');
      if (i + 1 < array.length) string += '-';
    }
  }
  if (string.endsWith('-')) string = string.slice(0, -1);
  return string;
}
