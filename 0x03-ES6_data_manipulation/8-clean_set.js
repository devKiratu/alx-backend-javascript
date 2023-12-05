export default function cleanSet(set, startString) {
  const words = [];
  if (startString && startString.length > 0) {
    set.forEach((value) => {
      if (value.startsWith(startString)) {
        words.push(value.substring(startString.length));
      }
    });
  }
  return words.join('-');
}
