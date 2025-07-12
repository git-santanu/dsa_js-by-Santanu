const reverseInteger = (num) => {
  let isNagetive = false;
  if (num < 0) isNagetive = true;
  num = Math.abs(num);
  let getLastDigit = 0;
  let prevOfLastDigit = 0;
  while (num > 0) {
    getLastDigit = num % 10;
    prevOfLastDigit = prevOfLastDigit * 10 + getLastDigit;
    num = Math.floor(num / 10);
  }
  return isNagetive ? -prevOfLastDigit : prevOfLastDigit;
};
const res = reverseInteger(-321);
console.log(res);
