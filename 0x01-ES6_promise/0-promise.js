export default function getResponseFromAPI() {
  const prom = new Promise((resolve, reject) => {
    const success = true;
    if (success === true) {
      resolve(true);
    } else {
      reject(new Error('failed.'));
    }
  });
  return prom;
}
