export function generationCode(length) {
  const num = Math.floor(Math.random() * Math.pow(10, length));
  if (num.toString().length !== 4) {
    return generationCode(length);
  }
  return num;
}
