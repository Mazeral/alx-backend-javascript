// 1. Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// 2. Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint already exists in the weakMap, if not set it to 0
  const count = weakMap.get(endpoint) || 0;

  // If the count is greater than or equal to 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Increment the count and set it back to the weakMap
  weakMap.set(endpoint, count + 1);
}
