import moment from "moment";
export const sum = (...args: number[]) => {
  return args.reduce((prev, current) => {
    if (Math.abs(current) === Infinity) {
      return NaN;
    }
    return prev + current;
  }, 0);
};

export const convertDateFormat = (
  dateString: string,
  format: string = "DD/MM/YYYY HH:mm:ss"
) => {
  //Y-m-d H:i:s
  return moment(dateString).format(format);
};

// --> d/m/Y H:i:s
