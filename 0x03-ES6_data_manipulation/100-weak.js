export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const number = weakMap.get(endpoint) || 0;

  if (number >= 4) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, number + 1);
}
