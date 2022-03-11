export const isPureFunction = (value: any) => {
  return !!(value.constructor && value.call && value.apply);
}

export const isInstance = (value: any) => {
  return !(value.constructor && value.call && value.apply);
}
