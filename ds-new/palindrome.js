// check palindrome
// pseudo code

// st >>
// end <<
// st < end :
// if (!isAlphaNumeric(st)) st ++; continue;
// if (!isAlphaNumeric(end)) end --; continue;
// if (lowerCase(st) !== lowerCase(end)) {
//     return false;
// }
// st++;
// end --;
// return true // outside the loop

// pseudo code

const isAlphaNumeric = (string) => {
  if (
    (string >= "0" && string <= "9") ||
    (string.toLowerCase() >= "a" && string.toLowerCase() <= "z")
  ) {
    return true;
  }
  return false;
};

const isPalinDrome = (string) => {
  let st = 0;
  let end = string.length - 1;
  while (st < end) {
    if (!isAlphaNumeric(string[st])) {
      st++;
      continue;
    }
    if (!isAlphaNumeric(string[end])) {
      end--;
      continue;
    }
    if (string[st].toLowerCase() !== string[end].toLowerCase()) {
      return false;
    }
    st++;
    end--;
  }
  return true;
};
console.log(isPalinDrome("1@2%1"));

const isNumberPalinDrome = (num) => {
  if (typeof num === 'string') return 'please provide number!'
  const original_num = num;
  let rev = 0;
  let last = 0;
  while (num > 0) {
    last = num % 10;
    rev = (rev * 10) + last;
    num = Math.floor(num / 10);
  }
  return rev === original_num;
};
const res = isNumberPalinDrome('');
console.log(res)
