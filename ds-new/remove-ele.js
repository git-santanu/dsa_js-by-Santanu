const removeElement = (n) => {
  let x = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] > n[x]) {
      x = x + 1;
      n[x] = n[i];
    }
  }
  let unique = [];
  for (let j = 0; j <= x; j++) {
    unique[j] = n[j];
  }
  return { no_unique_elements: x + 1, unique };
};
const arr = [1, 2, 2, 3, 3, 4, 4, 4, 4, 5];
const res = removeElement(arr);
console.log(res);
//expected output: 5, [1,2,3,4,5]

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

function removeElementV2(arr, val) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[k] = arr[i];
      k++;
    }
  };
  return k;
};
const arr1 = [3, 2, 2, 3]
console.log(removeElementV2(arr1, 2));