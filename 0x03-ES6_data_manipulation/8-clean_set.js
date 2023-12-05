export default function cleanSet(set, startString) {
  const words = [];
  set.forEach((value) => {
    if (value.startsWith(startString) && startString.length > 0) {
      words.push(value.substring(startString.length));
    }
  });
  return words.join('-');
}
