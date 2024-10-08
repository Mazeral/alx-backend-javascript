// 1. Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// 2. Export the queryAPI function
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  // Increment the count and set it back to the weakMap
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  // If the count is greater than or equal to 5, throw an error
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
