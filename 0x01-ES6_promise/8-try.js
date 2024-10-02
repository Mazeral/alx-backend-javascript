export default function divideFunction(numerator, denominator) {
  // You don't need try block to throw an error.
  if (denominator === 0) throw new Error('cannot divide by 0');
  else {
    return numerator / denominator;
  }
}
