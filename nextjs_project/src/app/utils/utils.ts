export const debounce = <Params extends unknown[]>(
  callback: (...args: Params) => unknown,
  timeout: number = 500
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};

export const cloneDeep = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const equalsArray = (array1: unknown[], array2: unknown[]) => {
  return (
    array1.length === array2.length &&
    array1.every(function (value, index) {
      return value === array2[index];
    })
  );
};
