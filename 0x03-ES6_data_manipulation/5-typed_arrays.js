export default function createInt8TypedArray(length, position, value) {
  if (length < position - 1) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}
