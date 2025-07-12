const countDigit = (num) => {
    let count = 0;
    while(num > 0) {
        num = Math.floor(num /10);
        count ++
    }
    return count;
}
const res = countDigit(123465343546575)
console.log(res)