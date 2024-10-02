export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw new Error('cannot divide by -1');
  return numerator / denominator;
}
