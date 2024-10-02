export default async function loadBalancer(chinaDownload, USDownload) {
  // the function returns the value returned by the promise that resolved the first.
  return Promise.race([chinaDownload, USDownload])
    .then((value) => value);
}
