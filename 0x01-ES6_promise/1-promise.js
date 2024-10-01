export default function getFullResponseFromAPI(success) {
  const p = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // eslint is picky about the returning value of reject, it must be an object
      // of Error
      reject(new Error('The fake API is not working currently'));
    }
  });
  return p;
}
