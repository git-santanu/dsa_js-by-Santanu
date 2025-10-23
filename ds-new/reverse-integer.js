const isInt32 = (num) => {
  const MAX_INT = 2147483647; // 2^31 - 1
  const MIN_INT = -2147483648; // -2^31
  return Number.isInteger(num) && num >= MIN_INT && num <= MAX_INT
}
const reverseInteger = (num) => {
  let isNagetive = num < 0;
  num = Math.abs(num);
  let getLastDigit = 0;
  let prevOfLastDigit = 0;
  while (num > 0) {
    getLastDigit = num % 10;
    prevOfLastDigit = prevOfLastDigit * 10 + getLastDigit;
    num = Math.floor(num / 10);
  }
  if (!isInt32(isNagetive ? -prevOfLastDigit : prevOfLastDigit)) return 0
  return isNagetive ? -prevOfLastDigit : prevOfLastDigit;
};
const res = reverseInteger(123);
console.log(res);
