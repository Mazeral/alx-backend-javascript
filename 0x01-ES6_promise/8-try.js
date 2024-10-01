export default function divideFunction(numerator, denominator) {
  let result;
  try {
    if (denominator === 0) throw new Error('cannot divide by -1');
    result = numerator / denominator;
  } catch (error) {
    return error.message;
  }
  return result;
}
