export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const number = weakMap.get(endpoint);

  if (number >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, number ? number + 1 : 1);
}
