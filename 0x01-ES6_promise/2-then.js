export default function handleResponseFromAPI(promise) {
  // we already get a promise, we just need to handle it
  return promise.then(() => ({
    status: 200,
    body: 'success',
  }))
    .catch(() => new Error())
    .finally(console.log('Got a response from the API'));
}
