export function getPropName(text: string) {
  let split = text.split('.');
  let propName = split[split.length - 1];
  return propName;
}
