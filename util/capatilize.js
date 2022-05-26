export default function capatilize(string) {
  if (!string) {
    return;
  }
  const first = string[0].toUpperCase();
  const rest = string.slice(1);
  return first + rest;
}
