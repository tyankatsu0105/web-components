export const parseValue = <Value extends unknown>(newValue: Value) => {
  let parsedValue: Exclude<Value, string>;

  if (typeof newValue === 'string') {
    parsedValue = JSON.parse(newValue);
  }
  else {
    parsedValue = newValue as Exclude<Value, string>;
  }

  return parsedValue
}
