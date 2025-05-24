const findMaxNumber = (arr) => {
let max = arr[0];
for(let i =0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
return max;
}
const arr = [2, 8, 9, 10, 25];
console.log(findMaxNumber(arr));

const findMinmumNumber = (arr) => {
let min = arr.length -1;
for(let i =0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
return min;
}
console.log(findMinmumNumber(arr));
