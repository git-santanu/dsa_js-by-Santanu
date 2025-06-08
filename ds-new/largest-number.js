const arr = [-1, 3, 10, 50, 9, 34, 25, 100, 255];

const findLargest = (arr) => {
  let max_num = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max_num) {
      max_num = arr[i];
    }
  }
  return max_num;
};


const res = findLargest(arr);
console.log(res)
