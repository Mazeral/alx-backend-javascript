export default function uploadPhoto(filename) {
  const p = new Promise((resolve, reject) => reject(new Error(`${filename} cannot be processed`)));
  return p;
}
